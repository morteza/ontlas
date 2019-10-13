# Ontlas

Ontlas is an ontology-driven SKOS-based atlas.

This project is however a proof-of-concept for a bigger knowledge engineering issue,
and still a playground to learn and experiment with some related technologies.


# Instruction

Here are the steps to compile, deploy and execute the jar file from from source codes:

- Install Maven or Gradle! Described below, you can find out how to build Ontlas using Maven; gradle works similarly.
- Change current directory to the root directory of the project, where `pom.xml` fiel exists.
- Run the following command to preapre dependencies and make the package: `mvn clean install compile package`.
- If it builds the package successfully, there must be an `ontlas-<version>-fat.jar` file inside the `target/` directory (e.g., `target/ontlas-0.0.1-fat.jar`).
  This file contains all dependencies and resources; ready to be deployed. 
- Run this file by `java -jar <jar_file_path>`, then open up the `http://localhost:8080` in your browser.
  - To set a custom port, you can provide a configuration file using an additional `-conf` argument.


# License

```
MIT License

Copyright (c) 2016 Morteza Ansarinia

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
