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

# Final Notes

Ports:

    Port 80 - Protocol: HTTP - used for standard web traffic

    Port 443 - Protocol: HTTPS - used for secure web traffic

    Port 22 - Protocol: SSH - used for secure remote login

  HTTP codes:

    300 - muliple possible routes

    400 - client-side error

    500 - server-side error

content-type header specifyes the media type of content being sent in the body of a request or response (whether it's HTML, JSON, XML, etc.)

Cookies:

  Secure cookie - ensures the cookie is sent to the server only over HTTPS (secure) connections. Secure attribute is added to the cookie in the code.

  HttpOnly Cookie - restricts access to the cookie from JavaScript running in the browser. Prevents client-side scripts from accessing sensitive cookie data like session tokens. Cannot be accessed via JavaScript APIs.

  Same-site cookie - controls whether a cookie is sent with cross-site requests. Mitigates cross-site request forgery (CSRF) attacks by restricting the contexts in which cookies are sent.

Secure password storage - Hash the password (never store the plain-text password),

Websocket protocol provides full-duplex comunication channels over a single, long-lived TCP connection. It allows for real-time, two-way communication between a client and a server.

JSX - JavaScript XML

JS - Javascript 

AWS - Amazon Web Services

NPM - Node Package Manager

NVM - Node Version Manager

When React components include each other, they form a hierarchy or tree structure of components. This is processed to generate a virtual DOM tree, which then maps to the real DOM (Document Object Model) of the browser.

React.useState() - used when a component needs to maintain a local state between rerenders

React Hooks are special functions introduced in React 16.8 that allow you to use state and other React features (e.g., lifecycle methods) in functional components, without the need to convert them into class components.

State hook - adds local state to functional componenets

context hook - provides access to context values(global/shared data) without needing to use <context.consumer>

Ref hook - Access/manipulate DOM elements directly, store mutable references that persist across renders

Effect hook - handles side effects(eg data fetching, subscriptions, DOM manipulations)

Performance hook - used to optimize rendering performance

package.json - holds metadata about the project and defines various settings, dependencies, and scripts that help manage and automate dev tasks. It is the central hub for managing your project's packages, scripts, and configurations.

Fetch - makes API calls

node.js - open-source, cross-platform runtime environment that allows you to run JavaScript on the server side, outside of the browser. With Node.js, you can use JavaScript to build server-side applications as well.

PM2 - popular production process manager for Node.js applications. It helps manage and keep your applications running smoothly in production by providing features like process monitoring, clustering, automatic restarts, and log management. It's particularly useful for handling long-running applications and ensuring that they stay online with minimal downtime. PM2 allows you to start, stop, restart, and monitor Node.js applications easily.

Vite - modern, fast, and lightweight build tool and development server for JavaScript applications.
