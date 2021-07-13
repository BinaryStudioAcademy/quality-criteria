<h1 align="center">
  Java🟨
</h1>

## Base

### Objective

-
  <details>
    <summary>
      <b>B1.</b> The code corresponds to the Technical Task.
    </summary>
    <p>
      All the mandatory tasks of the TT have been fulfilled.
    </p>
  </details>

-
  <details>
    <summary>
      <b>B2.</b> No unhandled errors occur when executing code.
    </summary>
    <p>
      Data loading and working with the app, no errors occur, the app doesn't break. All exceptions are either catched locally, present in the <code>throws</code> part of the method signature, or handled within exception handler.
    </p>
  </details>


### Naming

-
  <b>B3.</b> Names of variables, parameters, properties, methods and packages begin with a lowercase letter and are written in <code>lowerCamelCase</code> notation.

-
  <b>B4.</b> Names of classes, enums and interfaces begin with an uppercase letter and are written in <code>UpperCamelCase</code> notation.

-
  <b>B5.</b> Names of class final fields are written in <code>SCREAMING_SNAKE_CASE</code> notation.

-
  <b>B6.</b> English nouns are used as variable and property names.

-
  <b>B7.</b> Collections and arrays are named plural nouns.

-
  <b>B8.</b> Methods begin with a verb.


### Formatting and Code Styling

-
  <b>B9.</b> Curly braces are required everywhere in `if`, `for`, `do`, `while`, even in one-line blocks. First brace should be in the same line as operator, meanwhile, last brace should be in a separate line after the block.

-
  <b>B10.</b> The code matches the style of the project, defined in the linter.

-
  <b>B11.</b> Sets of constants of the same type are collected into Enums.

-
  <b>B12.</b> All non-final class properties should be marked as `private`, all access to them should be controlled with getters and setters

-
  <b>B13.</b> Only methods that are used in other classes should be marked as `public`. All implementation details should be in `private` methods.

-
  <b>B14.</b> Use Lombok for trivial `constructors`, `builder` implementation, `toString`, `equals`, `hashCode`, `getters` and `setters`.

-
  <b>B15.</b> Prefer forEach loop while iterating over the collection.

-
  <b>B16.</b> There should not be empty `catch` blocks.


### Rubbish

-
  <b>B17.</b> The versions of dependencies used are fixed in `pom.xml` or `gradle.build`.

-
  <b>B18.</b> There are no classes, methods, packages and parts of code that aren't used in the project code, including commented code pats.

### Magic

-
  <b>B19.</b> The code doesn't use "magic values", each of them has a separate variable or class property named as a constant. If the common constant value is used over a few classes, make it `public static final`.


### Security

-
  <b>B20.</b> All request DTOs are marked as @Valid in controller and has validation annotations

-
  <b>B21.</b> Every business-logic method should check if user has sufficient rights, and if he has relationship to the entity to process (e.g. not allow user to delete comments of another user or see his personal information).

-
  <b>B22.</b> Methods with multiple DB calls and with some logic between them should be wrapped in @Transactional annotation with corresponding isolation level.

-
  <b>B23.</b> All user data should be filtered and inserted into the SQL query as a parameter, not in plain text.

-
  <b>B24.</b> All user text inputs should be filtered against XSS.

-
  <b>B25.</b> Password are always hashed in the DB.

-
  <b>B26.</b> All API keys and other sensitive configuration data should not be committed to the repository. It should be received from environment, running configurations or secrets.


## Additional

### Objective

-
  <b>A1.</b> The Technical Task is implemented in full.


### Modules

-
  <b>A2.</b> If the same code is repeated in several modules, the repeated part is moved to a separate module.


### Redundancy

-
  <b>A3.</b> Where possible, the ternary operator is used in the assignment of a value instead of if.

-
  <b>A4.</b> Where possible, the spring derived query or JPQL are used for DB queries. Use native queries only when other two ways cannot define query.

-
  <details>
    <summary>
      <b>A5.</b> Conditions are simplified.
    </summary>
  <p>

  If the function returns a boolean value, do not use `if..else` with unnecessary `return`.

  Bad:

  ```java
      if (ready) {
        return true;
      } else {
        return false;
      }
  ```

  Good:

  ```java
    return ready;
  ```

  </p>
  </details>


### Complexity and Readability.

-
  <b>A6.</b> Long functions and methods are split into several smaller ones.

