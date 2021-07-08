<h1 align="center">
    FUNC - Function-level design(tactical patterns).
</h1>

<ul>
    <li>
        <details>
            <summary>
                <b>M-FUNC-1.</b> Method length.
            </summary>
            <p>
                Method length SHOULD be less than 25 LOC(soft limit) and MUST be less than 80 LOC(hard limit)
            </p>
        </details>
    </li>
    <li>
        <details>
            <summary>
                <b>M-FUNC-2.</b> Parameter count.
            </summary>
            <p>
                Method parameter count SHOULD be less than 5 and MUST be less than 8. No more than 2 optional parameters(be it nullable or explicit Optional) parameters are allowed. To avoid long signatures use DTO.
            </p>
        </details>
    </li>
    <li>
        <details>
            <summary>
                <b>M-FUNC-3.</b> Minimize exception propagation.
            </summary>
            <p>
                Handle exceptions as soon as possible, this way your function will be safer to call
            </p>
        </details>
    </li>
    <li>
        <details>
            <summary>
                <b>M-FUNC-4.</b> Use checked exceptions if error is a part of common flow.
            </summary>
            <p>
                This will make code more clear and concise. Also, consider first-class error handling for such cases.
            </p>
        </details>
    </li>
    <li>
        <details>
            <summary>
                <b>M-FUNC-5.</b> No empty catch
            </summary>
            <p>
                There should not be empty `catch` blocks. Exceptions must be either parsed and re-thrown or properly handled.
            </p>
        </details>
    </li>
    <li>
        <details>
            <summary>
                <b>M-FUNC-6.</b> Optionals are used for null-safety
            </summary>
            <p>
                When functions are might or might not return values, prefer returning Optional over returning null / throwing an exception or using null object pattern. When using JPA, prefer Option-based methods
            </p>
        </details>
    </li>
    <li>
        <details>
            <summary>
                <b>M-FUNC-7.</b> Safely unwrap optionals
            </summary>
            <p>
                When unwrapping optional - use getOrElse, orElse and orElseThrow methods. Don't use .get(), even if you checked it with .isPresent() beforehand.
            </p>
        </details>
    </li>
    <li>
        <details>
            <summary>
                <b>M-FUNC-8.</b> Prefer stream API over imperative APIs for mapping, filtering, sorting.
            </summary>
            <p>
                They are more neat and can be parallelized on demand. An exception is `reduce`. Either move reduce callbacks to separate functions, use one-liner callbacks or use for each loop. 
            </p>
        </details>
    </li>
    <li>
        <details>
            <summary>
                <b>M-FUNC-9.</b> Effectively final variables.
            </summary>
            <p>
                Always mark variables that will be used in lambdas as `final`. They have to be effectively final anyways, this just makes it more explicit. Also mark your local variables as final if your method is longer than 30 LOC, this will help others to understand if variable is re-assigned later in the code.
            </p>
        </details>
    </li>
    <li>
        <details>
            <summary>
                <b>FUNC-10.</b> Ternary operators.
            </summary>
            <p>
                Prefer ternary operators over if-else if you have to assign OR return a variable. Don't nest ternary operators;
            </p>
        </details>
    </li>
</ul>