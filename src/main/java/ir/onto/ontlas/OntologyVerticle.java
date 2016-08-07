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

import org.semanticweb.owlapi.model.IRI;
import org.semanticweb.owlapi.model.OWLOntology;
import org.semanticweb.owlapi.model.OWLOntologyCreationException;
import org.semanticweb.owlapi.model.OWLOntologyManager;

import java.io.InputStream;

import org.semanticweb.owlapi.apibinding.OWLManager;

public class OntologyVerticle {
  public static int axiomCount(InputStream ontologyFile) {
    try {
      OWLOntologyManager m = OWLManager.createOWLOntologyManager();
      OWLOntology o = m.loadOntologyFromOntologyDocument(ontologyFile);
      //OWLOntology o = m.loadOntology(IRI.create("http://onto.ir/2016/1/ontlas"));
      int c = o.getAxiomCount();
      return c;
    } catch (OWLOntologyCreationException e) {
      //e.printStackTrace();
      return -1;
    }
  }
}
