Notes for class

Address for server: http://54.81.241.195

SSH command:

ssh -i Downloads/production.pem ubuntu@54.81.241.195

SSH with domain name:

ssh -i Downloads/production.pem ubuntu@pokesearch.click

# Midterm Notes

## HTML

<"!DOCTYPE html"> - declares document type to be html

HTML Tags: Paragraph - <"p">, Ordered List - <"ol">, Unordered List - <"ul">, Heading - <"h1">

div - groups elements together

Margin - space outside of an element's border / Padding - space within an element's border

Span - has default CSS display value of inline

Hyperlink images - wrap the <"img"> tag in the <"a href"> tag

Using the <"script"> tag lets you include JavaScript on an html page

## CSS

## JavaScript

.getElementById("idname") - selects element with certain ID

if/else statements use same syntax as C++ pretty much

Creating an object:

const object = {

  name: 'object name',
  
  attribute: 'additional attribute'

};

## Console Commands

chmod - changes permissions of file or directory

pwd - prints current directory

cd - changes current directory

ls - lists files and directories in current directory

  ls -la - detailed list of all files and directories, including hidden ones

vim - text editor for creating and editing files

nano - another text editor that is more user-friendly than vim

mkdir - creates new directory

mv - moves or renames file

rm - removes files or directories (use rm -r directory_name for directories)

man - displays manual for a command

ssh - securely connects to a remote machine

ps - displayes information on a currently running process

wget - downloads files from the internet

sudo - executes a command with admin privileges

## Other

DNS A record can point to an IP address but not another A record

Ports:

    Port 80 - Protocol: HTTP - used for standard web traffic

    Port 443 - Protocol: HTTPS - used for secure web traffic

    Port 22 - Protocol: SSH - used for secure remote login
