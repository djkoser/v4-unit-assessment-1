/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE

let gitDefinition = "Git (as opposed to the gitHub repository) is a tool which which enables efficient document change tracking and version control. It works using a branch system whereby new branches, or code copies, are pulled from a main branch, modified to add features, and eventually merged back into the main branch. Previous branches can also be accessed to enable backtracking if code is broken. The basic workflow includes making changes, adding changes to the staging area, committing changes and subsequently pushing these to the gitHub repository for backup and cross-location collaboration."

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE

let gitHubDefinition = "gitHub is an online platform that allows commits made in a local git repository to be pushed and subsequently backed up into the cloud for cross-location collaboration and backup purposes."

//////////////////PROBLEMS 3 - 9////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

//CODE HERE

let init = {
    description: "The init command initializes a local git repository on one's computer",
    code:'git init'
}

//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

//CODE HERE

let clone = {
    description: "The clone command makes a copy of a repository from gitHub or another directory within one's working directory and links it to this remote repository.",
    code: "git clone url/directory"
}
//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

//CODE HERE

let status = {
    description: "The status command indicates which files have been changed and which of these have been added to the staging area and are ready to be commited", 
    code: "git status"
}

//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

//CODE HERE

let add = {
    description: "The add command addes specified files that have undergone changes to the staging area to be subsequently committed",
    code: "git add filename.txt or . (adds all changed files)"
}

//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE

let commit = {
    description: "The commit command commits changes made to the files in the staging area, with comments pertaining to these changes, to one's local git repository, and more specifically, the active branch or HEAD", 
    code: "git commit -m 'Commit message indicating changes'"
}

//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'addRemote' with 'description' and 'code' properties
    following the guidelines above to describe the command to add a remote location to your git repository.
*/

//CODE HERE

let addRemote = {
    description: 'The addRemote command links a local git repository to a gitHub repository, effectively making this "remote" repository the new master branch and enabling gitHub features.', 
    code: 'git remote add origin https://github.com/etc.'
}
//////////////////PROBLEM 9////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

//CODE HERE
 let push = {
    description: "The push command syncs commits made to one's local git repository with the remote gitHub repository, enabling gitHub features", 
    code: "git push"
 }