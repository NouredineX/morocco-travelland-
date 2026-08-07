# Local Deploy Script for Morocco Travelland
# This script runs the build locally and uploads the files to the VPS via SSH.

# 1. Build the application
Write-Host "Building application..." -ForegroundColor Cyan
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Error "Build failed! Please fix any compilation errors."
    exit $LASTEXITCODE
}

# 2. Ask user for their local SSH key path
$defaultKeyPath = "$HOME\.ssh\id_rsa"
$sshKeyPath = Read-Host "Enter the path to your SSH Private Key [Default: $defaultKeyPath]"
if ([string]::IsNullOrEmpty($sshKeyPath)) {
    $sshKeyPath = $defaultKeyPath
}

# Verify key exists
if (-not (Test-Path $sshKeyPath)) {
    Write-Error "SSH private key not found at: $sshKeyPath"
    exit 1
}

# 3. Upload dist files to VPS
Write-Host "Uploading files to Contabo VPS..." -ForegroundColor Cyan
scp -i $sshKeyPath -r -o StrictHostKeyChecking=no dist/* root@62.171.144.189:/opt/antigravity/moroccotravelland.com/
if ($LASTEXITCODE -ne 0) {
    Write-Error "File upload failed!"
    exit $LASTEXITCODE
}

# 4. Set owner and permissions on VPS
Write-Host "Setting correct ownership and permissions on VPS..." -ForegroundColor Cyan
ssh -i $sshKeyPath -o StrictHostKeyChecking=no root@62.171.144.189 "chown -R www-data:www-data /opt/antigravity/moroccotravelland.com/ && chmod 755 /opt/antigravity && chmod -R 755 /opt/antigravity/moroccotravelland.com/"
if ($LASTEXITCODE -ne 0) {
    Write-Error "Failed to set server permissions!"
    exit $LASTEXITCODE
}

Write-Host "Deployment completed successfully! Website is online." -ForegroundColor Green
