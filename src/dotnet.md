# .NET 🟦

## Base

### Objective

- <details>
    <summary>
      <b>B1.</b> A code corresponds to the Technical Task.
    </summary>
    <p>
      All the mandatory tasks of the TT have been fulfilled.
    </p>
  </details>

- <details>
    <summary>
      <b>B2.</b> A project compiles.
    </summary>
    <p>
      A project can be successfully built, and a compiler doesn't show any errors.
    </p>
  </details>

- <details>
    <summary>
      <b>B3.</b> No unhandled errors occur when executing code.
    </summary>
    <p>
      All parts of the application work as expected while code is executing.
    </p>
  </details>

- <details>
    <summary>
      <b>B4.</b> All tests (if any) pass successfully.
    </summary>
    <p>
      If a project has tests, all of them pass successfully.
    </p>
  </details>

### Naming

- <details>
    <summary>
      <b>B5.</b> Pascal casing is used for naming classes, interfaces, structs, records, and files.
    </summary>
    <p>

  ```csharp
  public class LanguageCode
  {

  }

  public struct Money
  {

  }

  ```

    </p>
  </details>

- <details>
    <summary>
      <b>B6.</b> Pascal casing is used for naming <code>public</code> class members and constants.
    </summary>
    <p>
    It's used for fields, properties, events, methods, etc.

  ```csharp
  public class Person
  {
    private const string Country = "Ukraine";
    public string Name { get; }
    public bool IsActive;
    public int GetAge()
    {
    }
  }
  ```

    </p>
  </details>

- <details>
    <summary>
      <b>B7.</b> Camel casing is used for naming parameters, local variables and private fields. For <code>private</code> fields prefix <code>_</code> is used.
    </summary>
    <p>

  ```csharp
  public class Person
  {
    private readonly string _name
    private bool _isActive;
    public int GetAge(int birthYear, int currentYear)
    {
      var age = currentYear - birthYear;
    }
  }
  ```

    </p>
  </details>

- <details>
    <summary>
      <b>B8.</b> English nouns are logically used for variable and property names.
    </summary>
    <p>
      Abbreviations are used only as service variables (for loops, predicates, etc.): <code>i</code>, <code>x</code>, and so on.

  Bad:

  ```csharp
  var data = new List<string> { "Joe", "Ross", "Chandler" };
  for (int index = 0; index < 3; index++)
  {
    Console.WriteLine(index);
  }
  ```

  Good:

  ```csharp
  for (int i = 0; i < 3; i++)
  {
    Console.WriteLine(i);
  }

  var name = "Ross";
  ```

    </p>
  </details>

- <details>
    <summary>
      <b>B9.</b> Arrays use plural nouns for naming.
    </summary>
  <p>

  ```csharp
  var integers = new List<int> { 1, 2, 3, 4, 5, 6 };
  var people = new List<Person>();
  ```

  </p>
  </details>

- <details>
    <summary>
      <b>B10.</b> Boolean variable names start with a prefix and are affirmative.
    </summary>
    <p>

  Bad:

  ```csharp
  public class Post
  {
    private bool _deleted = false;
    public bool Active { get; set; }
  }
  ```

  Good:

  ```csharp
  public class Post
  {
    private bool _isDeleted = false;
    public bool HasBillingAddress { get; set; }
  }
  ```

    </p>
  </details>

- <details>
    <summary>
      <b>B11.</b> Corresponding prefixes are used for names of interfaces and generic parameters.
    </summary>
    <p>
    Interface names must start with a capital <code>I</code> and then a usual pascal casing. Generic parameter names must start with capital <code>T</code> (can be just one letter).

  ```csharp
  public interface ICountryService<TCountry>
  {
    public TCountry GetCountry(int id);
  }

  public class EncryptedId<T>
  {
    public T Id { get; set; }
  }
  ```

    </p>
  </details>

- <details>
    <summary>
      <b>B12.</b> Asynchronous methods are marked with an <code>Async</code> suffix.
    </summary>
    <p>

  ```csharp
  public interface IProjectRepository
  {
    public Task<Project> GetByIdAsync(int id);
  }
  ```

    </p>
  </details>

- <summary>
  <b>B13.</b> 🅰️ All the assets have corresponding suffixes (.component, .module, .pipe, etc.)
  </summary>

### Formatting and Code Styling

- <details>
    <summary>
      <b>B14.</b> Curly braces are used everywhere and always start on a new line.
    </summary>
    <p>
    Curly braces are used everywhere if the statement implies and even if the code block consists of just one line. Curly braces always start with a new line.

  ```csharp
  public void Print(string mood)
  {
    if (mood == "fine")
    {
      Console.WriteLine("I'm fine");
    }
  }

  public class EmptyClass
  {
  }
  ```

    </p>
  </details>

- <details>
    <summary>
      <b>B15.</b> Access modifiers are always specified.
    </summary>
    <p>
    Access modifiers (<code>public</code>, <code>private</code>, etc.) are always specified for classes, interfaces, members, etc.

  ```csharp
  private readonly string _name;

  public void PrintName()
  {
    Console.WriteLine(_name);
  }

  public interface IPersonInterface
  {
  }
  ```

    </p>
  </details>

- <details>
    <summary>
      <b>B16.</b> There is always only one line between statements.
    </summary>
    <p>
    Bad:

  ```csharp
  private readonly string _name;


  public void PrintName()
  {
    Console.WriteLine(_name);
  }
  public interface IPersonInterface
  {
  }
  ```

  Good:

  ```csharp
  private readonly string _name;

  public void PrintName()
  {
    Console.WriteLine(_name);
  }

  public interface IPersonInterface
  {
  }
  ```

    </p>
  </details>

- <details>
    <summary>
      <b>B17.</b> Imports (<code>using</code> section) are always at the top of the file.
    </summary>
    <p>
    <code>using</code> statements reside at the top of the file with <code>System</code> imports going first, and then all the others sorted alphabetically.
    </p>
  </details>

- <details>
    <summary>
      <b>B18.</b> .NET predefined data types are not used (such as <code>Int32</code>, <code>Boolean</code> or <code>String</code>).
    </summary>
    <p>Built-in primitive types are used instead: <code>int</code>, <code>string</code>, <code>bool</code>
  </details>

- <details>
  <summary>
    <b>B19.</b> No asynchronous methods return <code>void</code>.
  </summary>
  <p>
    All asynchonous methods return <code>Task</code> or <code>Task&ltT&gt;</code>.
  </p>
  </details>

- <details>
    <summary>
      <b>B20.</b> LINQ method syntax used.
    </summary>
    <p>
    LINQ method syntax is preferred over query syntax:

  ```csharp
  int[] numbers = { 5, 10, 8, 3, 6, 12};

  //Query syntax:
  IEnumerable<int> evenIntsQuery =
    from num in numbers
    where num % 2 == 0
    orderby num
    select num;

  //Method syntax:
  IEnumerable<int> evenIntsMethod = numbers.Where(num => num % 2 == 0).OrderBy(n => n);
  ```

    </p>
  </details>

### Project structure and organization

- <details>
    <summary>
      <b>B21.</b> One class/interface/struct/enum/etc. per file.
    </summary>
    <p>
    Each class, interface, and all the other parts of the application reside in its files. Exception: nested classes are allowed if required.
    </p>
  </details>

- <summary>
    <b>B22.</b> Application solution is logically structured using different projects and directories.
  </summary>

- <details>
  <summary>
    <b>B23.</b> There are no redundant NuGet packages in the application.
  </summary>
  <p>
  All of the installed NuGet packages in different projects should be used.
  </p>
  </details>

- <details>
    <summary>
      <b>B24.</b> 🅰️ Folder structure maintained properly.
    </summary>
    <p>
    It can be "folder-by-structure" or "flat-structure" or something else as long as it's consistent.
    </p>
  </details>

- <summary>
    <b>B25.</b> 🅰️ Single responsibility rule is followed (one service or component per file).
  </summary>

### Security and performance

- <summary>
    <b>B26.</b> Sensitive data kept outside of code.
  </summary>

- <summary>
    <b>B27.</b> <code>using statement</code> is used when working with objects that consume resources (or IDisposable interface implemented).
  </summary>

- <summary>
    <b>B28.</b> Asynchronous execution isn't blocked by Task.Wait or Task.Result.
  </summary>

- <details>
    <summary>
      <b>B29.</b> LINQ calls are optimized.
    </summary>
    <p>

  Bad:

  ```csharp

  var childrenAmount = people.Where(x => x.Age < 18).Count();
  var isEmpty = people.Count() == 0;
  ```

  Good:

  ```csharp

  var childrenAmount = people.Count(x => x.Age < 18);
  var isEmpty = !people.Any();
  ```

    </p>
  </details>

- <details>
    <summary>
      <b>B30.</b> SQL code is always generated using parameters (no interpolation).
    </summary>
    <p>
    Bad:

  ```csharp
  int id = 1;
  string name = "Bill";
  int age = 60;

  var sql = $"INSERT INTO USERS(id, name, age) VALUES({id}, {Name}, {Age})";
  connection.Execute(sql);
  ```

  Good:

  ```csharp
  int id = 1;
  string name = "Bill";
  int age = 60;

  var sql = "INSERT INTO USERS(id, name, age) VALUES(@Id, @Name, @Age)";
  connection.Execute(sql, parameters: new
  {
    Id = id,
    Name = name,
    Age = age
  });
  ```

    </p>
  </details>

- <summary>
    <b>B31.</b> Cross-Origin Requests (CORS) are enabled.
  </summary>

- <summary>
    <b>B32.</b> 🅰️ Lazy loading is used for modules where possible.
  </summary>

- <summary>
    <b>B33.</b> 🅰️ No memory leaks while using observables.
  </summary>

### ASP.NET Core and API

- <summary>
    <b>B34.</b> Interfaces are used instead of implementations. They are registered using dependency injection.
  </summary>

- <details>
    <summary>
      <b>B35.</b> API is (mostly) RESTful.
    </summary>
    <p>
    At least:
      <ul>
        <li>POST requests only create resources</li>
        <li>GET requests only return data, without changing anything</li>
        <li>PUT requests only update information, etc</li>
      <ul>
    </p>
    </details>

- <details>
    <summary>
      <b>B36.</b> Endpoints return obvious codes.
    </summary>
    <p>
    At least:
      <ul>
        <li>200 — OK</li>
        <li>201 — Created</li>
        <li>404 — Not found, etc.</li>
      <ul>
    </p>
  </details>

- <summary>
  <b>B37.</b> No business logic inside controllers.
  </summary>

- <details>
    <summary>
      <b>B38.</b> Controllers don't work with domain models.
    </summary>
    <p>
    An application uses DTOs for input and output and performs mapping in the application layer to avoid working with domain objects in the controllers.
    </p>
  </details>

- <summary>
    <b>B39.</b> Plural nouns are used for paths (instead of verbs).
  </summary>

### Miscellaneous

- <details>
    <summary>
      <b>B40.</b> No "magic values" in code.
    </summary>
    <p>
    Code doesn't use any "magic values". They are at the top of the class definition as constants or in separate files.
    </p>
  </details>

- <summary>
    <b>B41.</b> The most abstract interfaces are used whenever possible (IEnumerable over ICollection, ICollection over IList, etc.)
  </summary>

- <summary>
    <b>B42.</b> Null-conditional operators are used if there are possible null values.
  </summary>

- <summary> 🅰️
    <b>B43.</b> No (or extra minimum) logic in templates.
  </summary>

- <summary> 🅰️
    <b>B44.</b> No logic in <code>main.ts</code> file.
  </summary>

## Additional

### Formatting and Code Styling

- <summary>
    <b>A1.</b> Properties and fields are above methods in classes.
  </summary>

- <summary>
    <b>A2.</b> Public methods are above the private ones.
  </summary>

- <details>
    <summary>
      <b>A3.</b> LINQ chain is split into lines.
    </summary>
    <p>

  Bad:

  ```csharp
  var studentNames = studentList.Where(s => s.Age > 18).Select(s => s).Where(st => st.StandardID > 0).Select(s => s.StudentName);
  ```

  Good:

  ```csharp
  var studentNames = studentList.Where(s => s.Age > 18)
                                .Select(s => s)
                                .Where(st => st.StandardID > 0)
                                .Select(s => s.StudentName);
  ```

    </p>
  </details>

- <details>
    <summary>
      <b>A4.</b> No redundant <code>else</code> statements.
    </summary>
    <p>

  Bad:

  ```csharp
  if (name == null)
  {
    throw new Exception("Name cannot be null");
  }
  else
  {
    Console.WriteLine($"Hello, {name}")
  }
  ```

  Good:

  ```csharp
  if (name == null)
  {
    throw new Exception("Name cannot be null");
  }
  Console.WriteLine($"Hello, {name}")
  ```

    </p>
  </details>

### Entity Framework Core

- <summary>
    <b>A5.</b> Entities for EF Core are configured using IEntityTypeConfiguration (not OnModelCreating) and split by files.
  </summary>

- <summary>
    <b>A6.</b> Database miggrations are short and conscise.
  </summary>

### Miscellaneous

- <details>
    <summary>
      <b>A7.</b> The last features of the language are used.
    </summary>
    <p>

  ```csharp
  // C# 8
  // Switch statements.
  public static Period GetCountry(PeriodUnit unit, int amount) =>
    unit switch
    {
      PeriodUnit.Days => Period.FromDays(amount),
      PeriodUnit.Months => Period.FromMonths(amount),
      PeriodUnit.Years => Period.FromYears(amount),
      _ => throw new ArgumentException("Not a valid period unit.")
    };

  // Using declaration
  using var file = new System.IO.StreamWriter("CountryCodes.txt");

  // Null-coalescing assignment
  var numbers = GetNumbers();
  numbers ??= new List<int>();

  // C# 9
  // Target typed new
  private Dictionary<string, object> _properties = new();

  // New pattern matching features
  if (name is not null) { ... }

  ```

    </p>
  </details>

- <summary>
    <b>A8.</b> Global exception handling middleware exists and handles all possible application exceptions.
  <summary>

- <summary>
    <b>A9.</b> API is documented.
  <summary>

- <summary>
    <b>A10.</b> There is a logging middleware.
  </summary>

### Objective

- <details>
    <summary>
      <b>A11.</b> The Technical Task is implemented in full.
    </summary>
    <p>
      All mandatory and optional tasks of the TT have been fulfilled.
    </p>
  </details>
