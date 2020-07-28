# Linux Initial Setup

## Add User


#### 1) Add user and set password

```
useradd username
passwd username
```

#### 2) Add to sudoers

```
visudo
```

Add the following line in the file.
```
username    ALL=(ALL)   ALL
```


## Rename Computer

```
sudo hostnamectl set-hostname computername
```
This will apply to all users after reboot.

## Install Zsh and Oh-My-Zsh

#### 1) Install Zsh

CentOS:
```
yum install zsh
```

Change default shell.
```
chsh -s /bin/zsh
```

#### 2) Install Oh-My-Zsh

Download Oh-My-Zsh.
```
git clone https://github.com/ohmyzsh/ohmyzsh.git ~/.oh-my-zsh
```

Download zsh-syntax-highlighting plugin.
```
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```

#### 3) Configure Zsh

Copy the configuration file [./assets/.zshrc](/linux/assets/.zshrc) to `~`.

Some themes may require powerline fonts, which can be found at [powerline/fonts](https://github.com/powerline/fonts) and [eugeneching/consolas-powerline-vim](https://github.com/eugeneching/consolas-powerline-vim).


## Configure Vim

#### 1) Install vim-plug

```
git clone https://github.com/junegunn/vim-plug.git ~/vim-plug
mkdir -p ~/.vim/autoload
cp ~/vim-plug/plug.vim ~/.vim/autoload/plug.vim
rm -r ~/vim-plug
```

To install a plugin, add `Plug 'pluginname'` in the section which starts with `call plug#begin('~/.vim/plugged')` and ends with `call plug#end()` in the vim configuration file (`~/.vimrc` or `/etc/.vimrc`), then run `:PlugInstall` in Vim.

#### 2) Install [lightline](https://github.com/itchyny/lightline.vim)

Add the following line to vim-plug section in `.vimrc`:
```
Plug 'itchyny/lightline.vim'
```

#### 3) Install [code-dark colour scheme](https://github.com/tomasiser/vim-code-dark)

Add the following line to vim-plug section in `.vimrc`:
```
Plug 'tomasiser/vim-code-dark'
```

Apply the colour scheme in `.vimrc` by
```
colorscheme codedark
```

#### 4) Other configuration settings

Copy the vim configuration file [`./assets/.vimrc`](/linux/assets/.vimrc)

## Setup Python 3.x

#### 1) Install Python 3.x and PIP

CentOS:
```
sudo yum install python3
sudo yum install epel-release
sudo yum install python3-pip
```

Ubuntu:
```
sudo apt install python3-pip
```

#### 2) Replace PIP source to Tsinghua mirror

```
sudo pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
```

N. B.: `sudo pip3` and `pip3` install packages into different directories! And they need to configurate respectively, too. It's best to keep to one of them.


## Replace Ubuntu Software Source

Settings -> About -> Software Update -> choose a server
