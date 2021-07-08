<h1 align="center">
    CLS - Class and interface design
</h1>

<ul>
    <li>
        <details>
            <summary>
                <b>M-CLS-1.</b> Property visibility.
            </summary>
            <p>
                All non-final class properties must be marked as `private`, `protected`, or `default(no modifier)`. All access to them must be controlled with getters and setters(if public access is necessary). Package and protected property access should be restricted, comment should be added to  any property that has non-private or public visibility.
            </p>
        </details>
    </li>
    <li>
        <details>
            <summary>
                <b>M-CLS-2.</b> Method visibility.
            </summary>
            <p>
                Only methods that are used in other classes should be marked as `public`. All implementation details should be in `private` methods. `protected` and `default(no modifier)` visibility should be explicitly commented.
            </p>
        </details>
    </li>
    <li>
        <details>
            <summary>
                <b>M-CLS-3.</b> Sealed classes.
            </summary>
            <p>
                When writing public codebase, keep classes not sealed, control access via class visibility and use `final` only if you have to expose class and it must not be modified. This will allow users of your library extend and modify your classes without major hacks(but this is still undesired).
                When writing private codebase, use `final` keyword on a class by default. Remove it only when a class is extended. 
            </p>
        </details>
    <li>
    <li>
        <details>
            <summary>
                <b>CLS-4.</b> Prefer generics over several classes.
            </summary>
            <p>
                If behavior can be described with generics, prefer it over creating several instances of classes, UNLESS it requires reflection to implement 
            </p>
        </details>
    <li>
    <li>
        <details>
            <summary>
                <b>CLS-5.</b> Prefer several specific interfaces over one generic interface. 
            </summary>
            <p>
                Decompose with your best judgement. This will allow you to meet Interface Segregation Principle requirements and partially help you with Single Responsibility Principle.

                ```java
                //Bad: both payment gateway connection and payment processing are in the same interface
                interface PaymentProcessor{
                    Payment createPayment(PaymentRequest paymentRequest);
                    Payment createPayment(PaymentRequest paymentRequest, ConnectedAccount transferAccount);
                    Refund refundPayment(Payment payment);
                    Account connectAccount(User user);
                    ConnectedAccount assertPaymentEnabled(Account account);
                }

                //Good: example of interface segregation, but other variants are possible, too
                interface PaymentGateway{
                    Payment createPayment(PaymentRequest paymentRequest);
                    Payment createPayment(PaymentRequest paymentRequest, ConnectedAccount transferAccount);
                    Refund refundPayment(Payment payment);
                }

                interface PaymentGatewayConnector{
                    Account connectAccount(User user);
                    ConnectedAccount assertPaymentEnabled(Account account);
                }

                interface PaymentProcessor extends PaymentGateway, PaymentGatewayConnector{}

                class StripePaymentProcessor implements PaymentProcessor{}
                ```
            </p>
        </details>
    <li>
    <li>
        <details>
            <summary>
                <b>CLS-6.</b> Prefer generics over several classes.
            </summary>
            <p>
                If behavior can be described with generics, prefer it over creating several instances of classes, UNLESS it requires reflection to implement 
            </p>
        </details>
    <li>
    <li>
        <details>
            <summary>
                <b>CLS-7.</b> Nested classes.
            </summary>
            <p>
                Nested classes usage must be limited. Do not nest classes more than 1 class depth-wide(no nested classes in nested classes). Use non-static nested classes ONLY if you're accessing parent class properties.
            </p>
        </details>
    <li>
</ul>