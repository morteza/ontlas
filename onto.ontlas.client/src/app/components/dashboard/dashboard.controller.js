class DashboardController {
  constructor($http) {
    "ngInject";

    this.conceptsSeries = [];
    this.conceptsData = [];

    var self = this;

    this.colors = ['#45b7cd', '#ff6384', '#ff8e72'];

    $http.get("http://195.146.37.203:4200/api/v1/ontologies/owl:Thing/subclasses").then(function(res){
      var maxX = 120;
      var minX = 0;
      var maxY = 120;
      var minY = 0;

      for (var i=0;i<res.data.length;i++) {
        self.conceptsSeries.push(res.data[i].title);
        self.conceptsData.push(res.data[i].count);
      }
    });

    this.accounts = [
      {
        name: "مرتضی انصاری‌نیا",
        role: {
          title:"توسعه‌دهنده",
          id: 1,
          value: "DEVELOPER"
        },
        email: "ansarinia@me.com"
      },
            {
        name: "سیمون مارملادوف",
        role: {
          title:"توسعه‌دهنده",
          id: 1,
          value: "DEVELOPER"
        },
        email: "marmeladov@me.com"
      }
    ];
  }
}

export default DashboardController;
