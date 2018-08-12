# Git Notes

## 2018-08-12 Sololearn Git

**Initializing a Git repository**

`mkdir <folder>` to creat a directory  
`cd <folder>` to navigate to a directory

`git init` to turn the current directory into a empty Git repository  

**File status**

1. Not tracked
2. Staged
3. Committed

`git status` to see actual status

`git add <filename>` to track the file (***staging***)  

`git commit -m <summary>` to add the changes of staged files to repository  
`git commit -a -m <summary>` to add the modifications of every tracked file to repository  

`git log` to see the history of commits

**Cloning and pushing**

`git clone <url>` to download the repository and start making changes  

`git remote add origin <url>` to connect a existing repository to the remote one

`git push -u origin master` to push the changes to the remote repository  
where the `-u` tells the system to remember the parameters  

**Pulling**

`git pull origin master`

`git diff HEAD` to check the difference from the last commit

**Reset and checkout**

`git reset <filename>` to remove the file from staged status  
`git reset HEAD` to remove the cancel the staged files    

`git checkout --<filename>` to reset the file to the latest committed version

**Branch**

`git branch <branchname>` to creat a new branch  
`git checkout <branchname>` to switch to the branch  
`git checkout -b <branchname>` to create and switch to a new branch  
`git branch` to see the branch list  
`git branch -d <branchname>` to delete a branch  

**Merging**  

`git merge <branchname>` merge the branch into the current one

**Conflict**  
when merging two conflicting branches, the file where conflicts emerge will have to be modified manually  
<img src="img\conflict.png" width="585px" height="142px">  
after solving the conflict in the file,  
`git add <filename>`  
`git commit -m <summary>`  
to finish merging

## 2018-07-28  

### Terminal Commands

`git commit -a -m 'Summary'`  

## 2018-07-27  

### Webpage

Creating a repostory and add README and license  
Add README manually  

### Terminal Commands

`git add`  
`git status`  
`git commit -m 'Summary'`  
`git push <-u origin master>`  

### Github Desktop

Pull / Restore the repo to a given directory  
Commit  
Push  
