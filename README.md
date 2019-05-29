# IP Localization Using Sauce Labs with Wonderproxy

This code is provided on an "AS-IS” basis without warranty of any kind, either express or implied, including without limitation any implied warranties of condition, uninterrupted use, merchantability, fitness for a particular purpose, or non-infringement. Your tests and testing environments may require you to modify this framework. Issues regarding this framework should be submitted through GitHub. For questions regarding usage of Sauce Labs with Wonderproxy, please see the Wonderproxy documentation at https://wonderproxy.com/docs/setup/proxy. This code example is not maintained by Sauce Labs Support.

### Environment Setup

1. Global Dependencies
    * Install [Node.js](https://nodejs.org/en/)
    * Or Install Node.js with [Homebrew](http://brew.sh/)
    ```
    $ brew install node
    ```
2. Sauce Credentials
    * In the terminal export your Sauce Labs Credentials as environmental variables:
    ```
    $ export SAUCE_USERNAME=<your Sauce Labs username>
	$ export SAUCE_ACCESS_KEY=<your Sauce Labs access key>
    ```
3. Wonderproxy Credentials
    * In the terminal export your Wonderproxy Credentials as environmental variables:
    ```
    $ export WONDERPROXY_USER=<your Wonderproxy username>
	$ export WONDERPROXY_PASS=<your Wonderproxy password>
    ```

4. Project Dependencies
	* Install Node modules
	```
	$ npm install
	```
5. Starting Sauce Connect
    * Download the appropriate binary for your system - [Sauce Connect](https://wiki.saucelabs.com/display/DOCS/Sauce+Connect+Proxy)
    * Start Sauce Connect with the desired proxy

    ```
    ./sc -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY --proxy <desired_wonderproxy_server>:11000 --proxy-userpwd $WONDERPROXY_USER:$WONDERPROXY_PASS -i <tunnel_identifier>
    --logfile <abs_path_to_log>```

### Running Tests

* Targeting the Sauce Connect tunnel
    * In the `wdio.conf.js` point your desired capability at the newly started `tunnelIdentifier`.
    ```
    browserName: 'chrome', platform: 'Windows 10', version: 'latest',, tunnelIdentifier: <tunnelIdentifier>}
    ```
* Tests in Parallel:
	```
	$ ./node_modules/.bin/wdio wdio.conf.js
	```

[Sauce Labs Dashboard](https://saucelabs.com/beta/dashboard/)

### Resources
##### [Sauce Labs Documentation](https://wiki.saucelabs.com/)

##### [SeleniumHQ Documentation](http://www.seleniumhq.org/docs/)

##### [WebdriverIO Documentation](http://webdriver.io/api.html)

##### [Node Documentation](https://nodejs.org/en/docs/)

##### [Mocha Documentation](https://mochajs.org/)

##### [Wonderproxy Documentation](https://wonderproxy.com/docs)

##### [Stack Overflow](http://stackoverflow.com/)
* A great resource to search for issues not explicitly covered by documentation
