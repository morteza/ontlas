/*******************************************************************************
 *        File: OntologyVerticle.java
 *    Revision: 1
 * Description: Ontology verticle.
 *      Author: Morteza Ansarinia <ansarinia@me.com>
 *  Created on: Jul 29, 2016
 *     Project: onto.cogatlas
 *   Copyright: See the file "LICENSE" for the full license governing this code.
 *******************************************************************************/
package ir.onto.ontlas;

import io.vertx.core.AbstractVerticle;
import io.vertx.core.Future;
import io.vertx.core.http.HttpServerResponse;
import io.vertx.ext.web.Router;
import io.vertx.ext.web.handler.StaticHandler;

public class AtlasVerticle extends AbstractVerticle {

  @Override
  public void start(Future<Void> fut) {

    Router router = Router.router(vertx);

    router.route().handler(rc -> {
      // This handler gets called for each request that arrives on the server
      HttpServerResponse response = rc.response();
      response.putHeader("content-type", "text/plain");
      
      response.end("Axioms: "+ OntologyVerticle.axiomCount(this.getClass().getResourceAsStream("ontlas.owl")));
      // Write to the response and end it
      //response.end("Hello from Vert.x Web!");
    });

    // Serve the static resources
    //router.route().handler(StaticHandler.create());

    vertx.createHttpServer().requestHandler(router::accept).listen(
        config().getInteger("http.port", 8080));

    /*vertx
        .createHttpServer()
        .requestHandler(r -> {
          r.response().end("<h1>Hello from first CogAtlas.</h1>");
        })
        .listen(8080, result -> {
          if (result.succeeded()) {
            fut.complete();
          } else {
            fut.fail(result.cause());
          }
        });
        */
  }
}
