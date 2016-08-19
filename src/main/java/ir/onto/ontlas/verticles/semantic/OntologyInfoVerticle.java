/*******************************************************************************
 *        File: OntologyInfoVerticle.java
 *    Revision: 1
 * Description: Extract general information from an ontology.
 *      Author: Morteza Ansarinia <ansarinia@me.com>
 *  Created on: Jul 29, 2016
 *     Project: onto.cogatlas
 *   Copyright: See the file "LICENSE" for the full license governing this code.
 *******************************************************************************/
package ir.onto.ontlas.verticles.semantic;

import org.semanticweb.owlapi.model.OWLOntology;
import org.semanticweb.owlapi.model.OWLOntologyManager;

import io.vertx.core.AbstractVerticle;
import io.vertx.core.json.JsonObject;
import io.vertx.core.logging.Logger;
import io.vertx.core.logging.LoggerFactory;

import java.io.InputStream;

import org.semanticweb.owlapi.apibinding.OWLManager;

public class OntologyInfoVerticle extends AbstractVerticle {
  
  public static final String ADDRESS = "ontology-info-service";
  private static final Logger LOG = LoggerFactory.getLogger(OntologyInfoVerticle.class);
  
  private static OWLOntology ontology = null;
  private static OWLOntologyManager ontologyManager = null;
  
  public void start() {
    LOG.info("Starting OntologyInfo service...");
    vertx.eventBus().consumer(OntologyInfoVerticle.ADDRESS, message -> {
      JsonObject messageBody = (JsonObject)message.body();
      LOG.info("Recevided message: " + messageBody);
      String ontologyFilePath = messageBody.getString("ontology", "ontlas.owl");

      Integer numOfAxioms = null;
      
      try {
        if (ontology==null) {
          ontologyManager = OWLManager.createOWLOntologyManager();
          InputStream ontologyFile = getClass().getClassLoader().getResourceAsStream(ontologyFilePath);
          ontology = ontologyManager.loadOntologyFromOntologyDocument(ontologyFile);          
        }
        numOfAxioms = ontology.getAxiomCount();
      } catch (Exception e) {
        LOG.error("Error while loading ontology.");
        e.printStackTrace();
      }
      
      messageBody.put("numOfAxioms", numOfAxioms);      
      message.reply(messageBody);
    });
  }
}
