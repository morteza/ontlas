package ir.onto.ontlas.verticles;

import io.vertx.core.AbstractVerticle;

public class HelloWorldVerticle extends AbstractVerticle {
  
  @Override
  public void start() {
    vertx.createHttpServer().requestHandler(req -> req.response().end("Hello world!")).listen(8080);
  }
}
