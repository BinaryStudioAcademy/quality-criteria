<h1 align="center">
    CODE - Code style.
</h1>

## Naming
<ul>
    <li>
        <details>
            <summary>
                <b>M-CODE-1.</b> Variable naming case.
            </summary>
            <p>
                Names of variables, parameters, properties, methods and packages begin with a lowercase letter and are written in <code>lowerCamelCase</code> notation.
            </p>
        </details>
    </li>
    <li>
        <details>
            <summary>
                <b>M-CODE-2.</b> Class naming case.
            </summary>
            <p>
                Names of classes, enums and interfaces begin with an uppercase letter and are written in <code>UpperCamelCase</code> notation.
            </p>
        </details>
    </li>
    <li>
        <details>
            <summary>
                <b>M-CODE-3.</b> Constant naming.
            </summary>
            <p>
                Names of class' <i>static</i> final fields are written in <code>SCREAMING_SNAKE_CASE</code> notation.
            </p>
        </details>
    </li>
    <li>
        <details>
            <summary>
                <b>M-CODE-4.</b> Class and variable names are nouns.
            </summary>
            <p>
                English nouns are used as variable and property names
            </p>
        </details>
    </li>
    <li>
        <details>
            <summary>
                <b>M-CODE-5.</b> Collection and array naming.
            </summary>
            <p>
                Collections and arrays are named plural nouns
            </p>
        </details>
    </li>
    <li>
        <details>
            <summary>
                <b>M-CODE-6.</b> Method naming.
            </summary>
            <p>
                Methods begin with a verb
            </p>
        </details>
    </li>
    <li>
        <details>
            <summary>
                <b>M-CODE-7.</b> Interface naming.
            </summary>
            <p>
                Interfaces should be named without any prefixes, implementations MAY include Impl suffix
            </p>
        </details>
    </li>
    <li>
        <details>
            <summary>
                <b>CODE-7.1.</b> Interface and class naming - Context.
            </summary>
            <p>
                Context is appended to class or interface name when ambiguity is possible
            </p>
            <code>

            ```java
                //BAD: Storage is ambiguous: it can be an entity, file storage, local thread storage
                interface Storage{
                }

                //GOOD: Storage purpose is clear from a first glance
                interface FileStorage{
                }
            ```
            </code>
        </details>
    </li>
</ul>

## Formatting
<ul>
    <li>
        <details>
            <summary>
                <b>M-CODE-7.</b> Curly braces.
            </summary>
            <p>
                Curly braces are required everywhere in `if`, `for`, `do`, `while`, even in one-line blocks. First brace should be in the same line as operator, meanwhile, last brace should be in a separate line after the block. Exception is <i>switch</i> statement, where one-liner returning statements can be without curly braces
            </p>
        </details>
    </li>
    <li>
        <details>
            <summary>
                <b>M-CODE-8.</b> Constants.
            </summary>
            <p>
                Sets of constants of the same type are collected into Enums
            </p>
        </details>
    </li>
    <li>
        <details>
            <summary>
                <b>M-CODE-9.</b> Classes.
            </summary>
            <p>
                One class per file, except nested(inner) classes.
            </p>
        </details>
    </li>
</ul>
