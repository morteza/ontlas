package ir.onto.ontlas.verticles;

import io.vertx.core.AbstractVerticle;
import io.vertx.core.json.JsonObject;
import io.vertx.core.logging.Logger;
import io.vertx.core.logging.LoggerFactory;
import ir.onto.ontlas.verticles.semantic.OntologyInfoVerticle;

public class WebApplicationVerticle extends AbstractVerticle {
  private static final Logger LOG = LoggerFactory.getLogger(WebApplicationVerticle.class);

  @Override
  public void start() {
    LOG.info("Starting web-verticle...");
    vertx.createHttpServer().requestHandler(request -> {
 
      JsonObject message = new JsonObject()
          .put("ontology", "ontlas.owl")
          .put("queryString", request.query()); 

      vertx.eventBus().send(OntologyInfoVerticle.ADDRESS, message, reply -> {
        JsonObject replyBody = (JsonObject) reply.result().body();        
        request.response().headers().set("Content-Type", "text/plain");
        request.response().end(replyBody.encodePrettily(), "UTF-8");
      });
    }).listen(config().getInteger("http.port", 8080));
  }
}
