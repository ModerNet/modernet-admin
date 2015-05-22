# ModerNet Administration Source Code
This is the source code repository for the ModerNet Administration project.

## Contributors

### Get the Code!

ModerNet is cross-platform friendly.

1. [Install Git](https://git-scm.com/)
2. [Install NodeJS](https://nodejs.org/)
3. Open a command-line and change to the root directory you want to place the source code in
5. Clone the repository: `git clone https://github.com/modernet/modernet-admin.git`
6. Change to the "modernet-admin" directory
7. Initialize the project's dependencies: `npm install`

Note: If you are behind an internet proxy that uses self-signed certificates (e.g. internet monitoring), you may need to disable SSL verification for `git` and `node`.

_Bower packages may still have an issue. (I briefly use my mobile hotspot to download the bower packages)_

__Disabling SSL Verification__

    git config --global http.sslVerify false
    npm config set strict-ssl false

__Enabling SSL Verification__

    git config --global http.sslVerify true
    npm config set strict-ssl true
    
### Shared IDE experience (editor)?

We are using the new, free, cross-platform preview of ["Visual Studio Code"](https://code.visualstudio.com/). There are a number of attractive features and [planned features](http://visualstudio.uservoice.com/forums/293070-visual-studio-code). We are especially interested in NodeJS support, rich intelli-sense, integrated debugging, and sharing common editor settings.

__[Vote to encourage MS to open-source the IDE!](http://visualstudio.uservoice.com/forums/293070-visual-studio-code/suggestions/7755573-open-source-vs-code)__

1. Download [Code](https://code.visualstudio.com/)
2. Open the "modernet-admin" project directory: `File -> Open folder...`
3. Switch to Debug (`Ctrl+Shift+D`)
4. Ensure "Run" is selected from the drop-down
5. Press `F5` to start the web server and run the website.