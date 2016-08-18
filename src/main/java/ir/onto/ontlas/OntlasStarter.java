/**
 * 
 */
package ir.onto.ontlas;

import io.vertx.core.AbstractVerticle;
import io.vertx.core.Vertx;
import ir.onto.ontlas.verticles.EchoServiceVerticle;
import ir.onto.ontlas.verticles.WebVerticle;

import static ir.onto.ontlas.utils.LoggingUtils.configureLogging;

public class OntlasStarter extends AbstractVerticle {
  
  public static void main(String... args) {
    configureLogging();
    
    Vertx vertx = Vertx.vertx();
    vertx.deployVerticle(new WebVerticle());
    vertx.deployVerticle(new EchoServiceVerticle());
  }
}
