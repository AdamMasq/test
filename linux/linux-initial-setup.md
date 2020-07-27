# Linux Initial Setup

## Add User


### Add user and set password

```
useradd username
passwd username
```

### Add to sudoers

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

### Install Zsh

CentOS:
```
yum install zsh
```

### Install Oh-My-Zsh

Download Oh-My-Zsh
```
git clone git://github.com/robbyrussell/oh-my-zsh.git ~/.oh-my-zsh
```

Download zsh-syntax-highlighting plugin.
```
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```

Copy the [configuration file](/linux/assets/.zshrc) to `~`.

Some themes may require powerline fonts, which can be found at [powerline/fonts](https://github.com/powerline/fonts) and [eugeneching/consolas-powerline-vim](https://github.com/eugeneching/consolas-powerline-vim).


## Configure Vim


## Setup Python 3.x


### Install Python 3.x and PIP

```
sudo yum install python3
sudo yum install epel-release
sudo yum install python3-pip
```

### Replace PIP source to Tsinghua mirror

Modify `~/.pip/pip.conf` as follows

```
[global]
index-url = https://pypi.tuna.tsinghua.edu.cn/simple
trusted-host = pypi.tuna.tsinghua.edu.cn
```

https://github.com/itchyny/lightline.vim


https://github.com/tomasiser/vim-code-dark
