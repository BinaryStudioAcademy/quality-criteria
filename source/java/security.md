<h1>SEC - Security</h1>

<ul>
    <li>
        <details>
            <summary>
                <b>M-SEC-1.</b> Validation.
            </summary>
            <p>
                All incoming request queries and bodies MUST be validated
            </p>
        </details>
    </li>
    <li>
        <details>
            <summary>
                <b>M-SEC-2.</b> Authentication.
            </summary>
            <p>
                Proper authentication protocol must be used. Simplest tool possible must be used to satisfy the requirements.
                If you need a simple session solution for a web-site - use session tokens stored in cookies instead of JWT.
                If you're building a distributed system that supports SSO, uses OAuth 2 or OpenID - use JWT.
            </p>
        </details>
    </li>
    <li>
        <details>
            <summary>
                <b>M-SEC-3.</b> Authorization.
            </summary>
            <p>
                Authorize requests. Prefer capability-based authorization that is NOT DEPENDENT ON EXTERNAL FRAMEWORK, for example <a href="https://fsharpforfunandprofit.com/posts/capability-based-security/">this approach</href>.
            </p>
        </details>
    </li>
    <li>
        <details>
            <summary>
                <b>M-SEC-4.</b> File access/uploads.
            </summary>
            <p>
                Avoid building your own file-serving solution or use framework-provided solutions. Prefer 3-d party services(such as CDNs or object stores) or infrastructure (Nginx) for content serving. If you absolutely have to build your own solution, make sure that it is protected from path traversals, RCE and DoS attacks.
            </p>
        </details>
    </li>
    <li>
        <details>
            <summary>
                <b>M-SEC-5.</b> Use encrypted communications outside your VPN.
            </summary>
            <p>
                Both staging and production servers must communicate with clients via encrypted channels. Use SSL, don't build your own encryption methods.
            </p>
        </details>
    </li>
    <li>
        <details>
            <summary>
                <b>M-SEC-6.</b> Use cryptographic hashes or safe key derivation functions to store passwords.
            </summary>
            <p>
                Don't store passwords in plain text. Use cryptographically safe functions. Currently Argon2 is recommended to hash passwords.
            </p>
        </details>
    </li>
    <li>
        <details>
            <summary>
                <b>M-SEC-7.</b> Use prepared statements and query builders to avoid sql or nosql injections.
            </summary>
        </details>
    </li>
    <li>
        <details>
            <summary>
                <b>M-SEC-8.</b> Don't leak any implementation details via API.
            </summary>
            <p>
                Never send a stack trace or internal(such as database) error messages via API.
            </p>
        </details>
    </li>
    <li>
        <details>
            <summary>
                <b>M-SEC-9.</b> Strip sensitive data from logs.
            </summary>
            <p>
                Strip or scramble sensitive data from logs, such as passwords, user details, payment details, emails, etc.
            </p>
        </details>
    </li>
</ul>
