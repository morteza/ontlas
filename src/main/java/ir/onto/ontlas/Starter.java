/**
 * 
 */
package ir.onto.ontlas;

import io.vertx.core.AbstractVerticle;
import io.vertx.core.Vertx;
import io.vertx.ext.web.Router;
import io.vertx.ext.web.handler.StaticHandler;
import ir.onto.ontlas.verticles.EchoServiceVerticle;
import ir.onto.ontlas.verticles.WebApplicationVerticle;
import ir.onto.ontlas.verticles.semantic.OntologyInfoVerticle;

import static ir.onto.ontlas.utils.LoggingUtils.configureLogging;

public class Starter extends AbstractVerticle {
  
  public static void main(String... args) {
    configureLogging();
    
    Vertx vertx = Vertx.vertx();
    Router router = Router.router(vertx);
    
    // Services go here!
    vertx.deployVerticle(new WebApplicationVerticle());
    vertx.deployVerticle(new EchoServiceVerticle());
    vertx.deployVerticle(new OntologyInfoVerticle());
    
    // Serve static resources from the /assets directory
    router.route("/assets/*").handler(StaticHandler.create("assets"));
  }
}
