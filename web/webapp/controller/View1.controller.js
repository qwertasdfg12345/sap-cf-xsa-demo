sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("ac.web.controller.View1", {
		onInit: function () {
			var oModel = new sap.ui.model.odata.ODataModel("/xsodata/purchaseOrder.xsodata", true);
			this.getView().setModel(oModel);
		}
	});
});