# ModerNet Administration Source Code
This is the source code repository for the ModerNet Administration project.

## Contributors

ModerNet is cross-platform friendly.

1. [Install Git](https://git-scm.com/)
2. [Install NodeJS](https://nodejs.org/)
3. Open a command-line and change to the root directory you want to place the source code in
5. Clone the repository: `git clone https://github.com/modernet/modernet-admin.git`
6. Change to the "modernet-website" directory
7. Initialize the project's dependencies: `npm install`

*Note: If you are behind an internet proxy that uses self-signed certificates (e.g. internet monitoring), you may need to disable SSL verification for `git` and `node`.

__Disabling SSL Verification__

    git config --global http.sslVerify false
    npm config set strict-ssl false

    _Bower packages may still have an issue. (I briefly use my mobile hotspot to download the bower packages)_

__Enabling SSL Verification__

    git config --global http.sslVerify true
    npm config set strict-ssl true