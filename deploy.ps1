# Euroclub V2 - Vercel Deploy Script
# Usage: .\deploy.ps1 [-Production]

param(
    [switch]$Production = $false
)

$VERCEL_TOKEN = $env:VERCEL_TOKEN

if (-not $VERCEL_TOKEN) {
    Write-Host "Error: VERCEL_TOKEN environment variable not set" -ForegroundColor Red
    Write-Host ""
    Write-Host "To set it temporarily:" -ForegroundColor Yellow
    Write-Host '  $env:VERCEL_TOKEN = "your_token_here"' -ForegroundColor Yellow
    Write-Host ""
    Write-Host "To get a token:" -ForegroundColor Yellow
    Write-Host "  1. Go to https://vercel.com/account/tokens" -ForegroundColor Yellow
    Write-Host "  2. Create a new token" -ForegroundColor Yellow
    Write-Host "  3. Copy and use it" -ForegroundColor Yellow
    exit 1
}

Write-Host "Deploying Euroclub V2 to Vercel..." -ForegroundColor Cyan

if ($Production) {
    Write-Host "Mode: PRODUCTION" -ForegroundColor Green
    vercel deploy --prod --yes --token $VERCEL_TOKEN
} else {
    Write-Host "Mode: PREVIEW" -ForegroundColor Yellow
    vercel deploy --yes --token $VERCEL_TOKEN
}

if ($LASTEXITCODE -eq 0) {
    Write-Host "Deployment successful!" -ForegroundColor Green
} else {
    Write-Host "Deployment failed!" -ForegroundColor Red
    exit 1
}
