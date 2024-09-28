#!/bin/bash

# Navigate to the workshop directory
cd "$(dirname "$0")" || exit

# Check if the directory is a git repository
if [ ! -d ".git" ]; then
    echo "Initializing a new Git repository..."
    git init
fi

# Add remote repository (replace with your repository URL)
git remote add origin https://github.com/sandeepkumawat9829/Angular-workshop-Assignments.git

# Add all files to staging
echo "Adding files to staging..."
git add .

# Commit the changes
echo "Committing changes..."
git commit -m "Automated commit: Adding Angular workshop assignments"

# Push to GitHub
echo "Pushing to GitHub..."
git push -u origin master --force

echo "Finished pushing to GitHub!"
