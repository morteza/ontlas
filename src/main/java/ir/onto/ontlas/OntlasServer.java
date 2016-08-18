/**
 * 
 */
package ir.onto.ontlas;

import io.vertx.core.DeploymentOptions;
import io.vertx.core.Vertx;
import io.vertx.core.json.JsonObject;
import ir.onto.ontlas.verticles.RestApiVerticle;
import static ir.onto.ontlas.verticles.RestApiVerticle.CONFIG_PORT;

public class OntlasServer {
  public static void main(String[] args) {
    Vertx vertx = Vertx.vertx();
    vertx.deployVerticle(RestApiVerticle.class.getName(),
        new DeploymentOptions().setConfig(
            new JsonObject()
              .put(CONFIG_PORT, 8080)
//              .put(CONFIG_NET_PORT, 9000)
//              .put(CONFIG_KAFKA_BROKERS, args[0])
//              .put(CONFIG_KAFKA_PORT, 9092)
//              .put(CONFIG_ZOOKEEPER, args[0] +":2181")
//              .put(CONFIG_ZOOKEEPER_CONNECT_STRING, args[0] +":2181")
//              .put(CONFIG_BOOTSTRAP_SERVERS, args[0] +":9092"))
            )
        );
  }
}
