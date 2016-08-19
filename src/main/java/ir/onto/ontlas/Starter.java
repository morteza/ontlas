/**
 * 
 */
package ir.onto.ontlas;

import io.vertx.core.DeploymentOptions;
import io.vertx.core.Vertx;
import io.vertx.core.json.JsonObject;
import io.vertx.ext.web.Router;
import io.vertx.ext.web.handler.StaticHandler;
import ir.onto.ontlas.verticles.EchoServiceVerticle;
import ir.onto.ontlas.verticles.WebApplicationVerticle;
import ir.onto.ontlas.verticles.semantic.OntologyInfoVerticle;

import ir.onto.ontlas.utils.DeploymentOptionsUtils;
import ir.onto.ontlas.utils.LoggingUtils;

public class Starter {
  
  public static void main(String... args) {
    LoggingUtils.configureLogging();
    
    // Load configs from file
    JsonObject confs = DeploymentOptionsUtils.readConfigJsonResource();
    DeploymentOptions options = new DeploymentOptions().setConfig(confs);

    Vertx vertx = Vertx.vertx();
    Router router = Router.router(vertx);
    
    // Services go here!
    vertx.deployVerticle(new WebApplicationVerticle(), options);
    vertx.deployVerticle(new EchoServiceVerticle(), options);
    vertx.deployVerticle(new OntologyInfoVerticle(), options);
    
    // Serve static resources from the /assets directory
    router.route("/assets/*").handler(StaticHandler.create("assets"));
  }
}
