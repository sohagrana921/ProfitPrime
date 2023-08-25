const FAQuestion = () => {
  return (
    <div>
      <h1 className="text-5xl font-serif font-bold text-center my-10">FAQ Section</h1>
      <div className="collapse collapse-plus bg-white">
        <input type="radio" name="my-accordion-3" checked="checked" />
        <div className="collapse-title text-xl font-medium">
          What is Redux ?
        </div>
        <div className="collapse-content">
          <p>
            Redux is an open-source JavaScript library primarily used for
            managing the state of web applications in a predictable and
            efficient way. It is often used in conjunction with React, a popular
            JavaScript library for building user interfaces, although it can be
            used with other JavaScript frameworks or libraries as well.Redux was
            created by Dan Abramov and Andrew Clark and is inspired by the Flux
            architecture, which was developed by Facebook. It provides a
            centralized and predictable way to manage the state of an
            application, which can become complex as the application grows.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-white mt-5">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          What is React JS?
        </div>
        <div className="collapse-content">
          <p>
            React.js, often referred to as React, is an open-source JavaScript
            library for building user interfaces. It is maintained by Facebook
            and a community of developers. React simplifies the process of
            creating interactive, reusable, and efficient user interface
            components for web and mobile applications.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-white mt-5 mb-10">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
        What is Tailwind CSS?
        </div>
        <div className="collapse-content">
          <p>
            Tailwind CSS is a popular open-source utility-first CSS framework
            that simplifies the process of styling web applications. Unlike
            traditional CSS frameworks like Bootstrap or Foundation, which
            provide pre-designed UI components, Tailwind CSS focuses on
            providing a set of utility classes that you can use directly in your
            HTML markup to style elements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQuestion;
