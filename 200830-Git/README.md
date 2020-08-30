
# GIT

I use GIT for every project I make, It's time I learn to use it properly

## What I already know

I've used Git for a a few years now, so I can already use it, here's what I already know:

A git repo can be seen as a tree. Each new commit adds a new node to the tree.
A branch is **not** necessarilly a branch in the tree, it's an alias for a
node, and can be moved at will.

Here are the commands I know and use:

- Stage files / changes for the next commit
```
$ git add file.txt
#  OR
$ git add -A # to stage everything as it is on the current local repo
```

- Commit changes to your local tree
```
$ git commit -m "commit message"
```

- Push your local commits to the remote tree (e.g. GitHub)
```
$ git push
```

- Switch to another/a new branch
```
$ git checkout feature/my_branch
$ git checkout -b feature/my_branch  # To create a new branch
```

- Merge branches
```
$ git checkout master
$ git merge features/my_feature
```

- Copy commits to the current node
```
$ git cherry-pick another_branch^ # This means 1 commit before the branch "another_branch"
```

## What I want to learn

I'd like to know more about:

- [ ] **interactive rebases**
- [ ] **merging best practices**
- [x] **`git fetch`**
- [x] **releases / tags**


## What I learned

### Releases / tags

```
# Create a new tag:
git tag -a v1.0 -m "That's the 1st release!"

# list all tags:
git tag

# Show a specific tag:
git show v1.0

# Push tags to remote:
git push --tags origin master
```

### Git fetch

It seems like `git pull` and `git fetch` do kind of the same thing: get remote commits to the local repo

`git fetch` allows you to get the remote branches that you may not have locally:

```
# Get all branches:
git fetch origin

# Get one specific branch:
git fetch origin other_branch
```

### Rebase

The basic concept of the rebase workflow is to take all the commits from a
feature branch, and moves them on top of the master branch. then you have one
commit per "merge".

The tree gets way more neat.

Commands when I'm ready to merge:
```
git checkout master
git pull
git rebase feat/my_feat

# At this poingt, we have smth like that:
#
#     * (HEAD -> feat/my_feat) Cleaning up
#     * Correcting stuff
#     * Changing color
#     |
#     * (master) Adding description
#     * Adding highlight
#     * Adding underline

# Squashing all comits from HEAD down to master:
git rebase -i master

# Depending on what you do in the interactive menu, you might (should) end up with:
#
#     * (HEAD -> feat/my_feat) Changing title color
#     * (master) Adding description
#     * Adding highlight
#     * Adding underline

git checkout master
git rebase feat/my_feat

# Now we have a straight line, no apparent branches:
#
#     * (HEAD -> master)(feat/my_feat) Changing title color
#     * Adding description
#     * Adding highlight
#     * Adding underline

git branch -d feat/my_feat
git push --delete feat/my_feat
```

### Merging best practices

When I'm on my dev branch, and i'm ready to merge:
```
git rebase -i <commit of the base of my branch> # To avoid pushing unnecessary commits
git checkout master
git pull
git merge --no-ff feat/my_feat

git push

git branch -d feat/my_feat
git push --delete feat/my_feat
```

## Links

[Git Crash Course - An Effective Git Workflow for Small Teams](https://www.youtube.com/watch?v=BF2OHMM86Ik)

[git rebase](https://www.youtube.com/watch?v=f1wnYdLEpgI)

[merve vs rebase](https://www.youtube.com/watch?v=dO9BtPDIHJ8)
