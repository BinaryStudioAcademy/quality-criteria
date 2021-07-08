<h1 align="center">
    B - Base rules.
</h1>

## Objective
<ul>
    <li>
        <details>
            <summary>
                <b>M-B-1.</b> The code corresponds to the Technical Task.
            </summary>
            <p>
                All the mandatory tasks of the TT have been fulfilled.
            </p>
        </details>
    </li>
    <li>
        <details>
            <summary>
                <b>M-B-2.</b> YAGNI principle is applied.
            </summary>
            <p>
                No extra features is done, unless it is specified in the specification and or technical tasks.
            </p>
        </details>
    </li>
</ul>

## General rules
<ul>
    <li>
        <details>
            <summary>
                <b>M-B-3.</b> No unhandled errors occur when executing code.
            </summary>
            <p>
                Data loading and working with the app, no errors occur, the app doesn't break. All exceptions are either catched locally, present in the <code>throws</code> part of the method signature, or handled within exception handler.
            </p>
        </details>
    </li>
    <li>
        <details>
            <summary>
                <b>M-B-4.</b> App shutdown is handled gracefully. 
            </summary>
            <p>
                All connections are properly closed, allocated resources are released, shutdown reason is written into the log and meaningful status code is returned to the OS
            </p>
        </details>
    </li>
    <li>
        <details>
            <summary>
                <b>M-B-5.</b> Log messages are informative and processable. 
            </summary>
            <p>
                No redundant messages are logged(e.g. "Got this far!") in production. Log messages are clear and provide context details if necessary. If logs will be gathered by third party tools they are in machine-processable format(e.g. JSON or XML).
            </p>
        </details>
    </li>
    <li>
        <details>
            <summary>
                <b>M-B-6.</b> Proper quality verifications mechanisms are in place. 
            </summary>
            <p>
                Quality checking process should be as much automated as possible, to reduce amount of time that is required by code owners to review and merge changes into the codebase. Proper CI pipeline should be in place to give immediate feedback, on commit/push hooks should be setup in VCS to give feedback before code was even pushed to the remote.
            </p>
        </details>
    </li>
    <li>
        <details>
            <summary>
                <b>M-B-7.</b> Linter. 
            </summary>
            <p>
                Linter(statical code analyzer) and formatter is used to increase and automate code quality. Formatting style is uniform.d
            </p>
        </details>
    </li>
</ul>