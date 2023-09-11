# Outlook UI

Outlook Add-In Template.

## Description

A template to get started with message compose Office Outlook add-in.

## Getting Started

### Dependencies

- Install Node.js latest stable version, recomended version `v18.13.0`.
- Make sure to have installed `npm`.

### Installing

- Navigate to root of the project.
- Install dependencies with command `npm install`

### Executing program

- Use `npm start` to run locally inside of your desktop Outlook
- Use `npm run dev-server` to spin up the server locally

## Help

You can also open add-in inside your Web Outlook. Make sure that you are running app locally with previous command.
Open your Web Outlook and upload add-in using the manifest.xml file.

## Authors

Contributors names and contact info

- Amir Ramic [@amirr-cl](https://github.com/amirr-cl)

## Version History

- 1.0.1
  - Initial Release

## License

This project is licensed under the MIT License

When you are developing Microsoft office add-ins you may need to open up developer tools on right-click(for debugging purposes). By default, it only allows to see the source but not inspect option.
If you want to enable it you may need to enter the below command on the terminal and reopen the add-in again.
defaults write com.microsoft.Excel OfficeWebAddinDeveloperExtras -bool true
defaults write com.microsoft.Word OfficeWebAddinDeveloperExtras -bool true
defaults write com.microsoft.Powerpoint OfficeWebAddinDeveloperExtras -bool true
defaults write com.microsoft.Outlook OfficeWebAddinDeveloperExtras -bool true
