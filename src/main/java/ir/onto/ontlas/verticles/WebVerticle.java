package ir.onto.ontlas.verticles;

import io.vertx.core.AbstractVerticle;
import io.vertx.core.json.JsonObject;
import io.vertx.core.logging.Logger;
import io.vertx.core.logging.LoggerFactory;

public class WebVerticle extends AbstractVerticle {
  private static final Logger LOG = LoggerFactory.getLogger(WebVerticle.class);

  @Override
  public void start() {
    LOG.info("Starting web-verticle...");
    vertx.createHttpServer().requestHandler(request -> {
 
      JsonObject message = new JsonObject()
          .put("text", "hello from web-verticle.")
          .put("queryString", request.query()); 

      LOG.info("Sending message: " + message);
      vertx.eventBus().send(EchoServiceVerticle.ADDRESS, message, reply -> {
        JsonObject replyBody = (JsonObject) reply.result().body();
        LOG.info("Received message: " + replyBody);
        
        request.response().end(replyBody.encodePrettily());
      });
    }).listen(8080);
  }
}
