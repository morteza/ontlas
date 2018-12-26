class editController {
  constructor($state, OntologiesService) {
    "ngInject";
    //TODO set payloadId if :id is passed
    //TODO load data into this.payload
    this.name = 'edit';
    this.OntologiesService = OntologiesService;
    this.api = OntologiesService.api;
    this.$state = $state;
    //TODO load type from server
    this.licenses =
    [
      {
        value:"MIT",
        title:"مجوز MIT"
      },
      {
        value: "APACHE",
        title: "مجوز آپاچی نسخهٔ ۲"
      },
      {
        value: "FREE",
        title: "مجوز رایگان"
      }
    ];
  }

  submit() {
    //TODO validate
    this.api.save(this.payload).$promise.then(function(){
      $state.go('ontologies');
    });
  }

  cancel() {
    console.log("Canceled!");
    $state.go('ontologies');
  }
}

export default editController;
