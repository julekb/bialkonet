var proteinViewer = new ProteinViewer('structureViewer');

var sequenceViewer = new SequenceViewer("sequenceViewer", 500, 100, 20);

proteinViewer.onClickingAtom(sequenceViewer.blinkAt.bind(sequenceViewer));
sequenceViewer.onZoom = proteinViewer.highlightFromTo;


// in future, data should be joined beforehand
d3.json("data/graph.json", function(errorJSON, dataJSON) {
  d3.csv("data/crystals_metadata.csv", function(errorCSV, dataCSV) {

    var additionalData = _.indexBy(dataCSV, 'id');
    dataJSON.nodes = dataJSON.nodes
      .map(function(d) {
        return _.assign(d, additionalData[d.p_id]);
      });

    drawGraph(dataJSON);

    // calculate h and n

  });
});
