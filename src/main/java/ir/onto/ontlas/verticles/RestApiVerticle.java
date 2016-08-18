/*******************************************************************************
 *        File: RestApiVerticle.java
 *    Revision: 1
 * Description: REST API handlers.
 *      Author: Morteza Ansarinia <ansarinia@me.com>
 *  Created on: Aug 17, 2016
 *     Project: onto.ontlas
 *   Copyright: See the file "LICENSE" for the full license governing this code.
 *******************************************************************************/
package ir.onto.ontlas.verticles;

import io.vertx.core.AbstractVerticle;
import io.vertx.core.DeploymentOptions;
import io.vertx.core.Future;
import io.vertx.core.http.HttpServerOptions;
import io.vertx.core.logging.Logger;
import io.vertx.core.logging.LoggerFactory;
import io.vertx.ext.web.Router;
import io.vertx.ext.web.RoutingContext;

import static io.vertx.core.http.HttpMethod.*;

public class RestApiVerticle extends AbstractVerticle {
  private static final Logger logger = LoggerFactory.getLogger(RestApiVerticle.class);
  public static final String CONFIG_PORT = "port";
  
  @Override
  public void start(Future<Void> startFuture) throws Exception {
    //TODO
    logger.error("[RestApiVerticle.start] Not implemented yet!");
    
    int httpPort = config().getInteger(CONFIG_PORT, 8090);
    Router apiRouter = Router.router(vertx);
  }
  /*
  private void addRouteForRetrievingConceptInfo(Router apiRouter) {
    apiRouter.routeWithRegex("/concepts/(\\d+)")
            .method(GET)
            .handler(context -> {
                if (isNumeric(context.request().params().get("param0")) && idToGameMap.containsKey(getParam0(context))) {
                    context.response().end(idToGameMap.get(getParam0(context)).toString());
                    return;
                }
                context.response().setStatusCode(404).end();
            });
  }
  */
  private Integer getParam0(RoutingContext context) {
    return Integer.valueOf(context.request().params().get("param0"));
}
}
