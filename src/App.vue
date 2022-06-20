<template>
  <div id="app">
    <h1>Ciao</h1>
    <transition name="fade">
      <ejs-grid
        v-if="showTable"
        :dataSource="people"
        :columns="columns"
        :queryCellInfo="customPlaceholder"
        :allowPaging="true"
        :pageSettings="pageSettings"
        :toolbar="toolbar"
        :showColumnChooser="true"
      >
        <e-columns>
          <!-- <e-column
            field="FirstName"
            headerText="firstName"
            textAlign="Left"
          ></e-column>
          <e-column
            field="LastName"
            headerText="Last Name"
            textAlign="Left"
          ></e-column>
          <e-column
            field="Gender"
            headerText="Gender"
            textAlign="Left"
          ></e-column>
          <e-column field="Age" headerText="Age" textAlign="Left"></e-column>
          <e-column
            field="Emails"
            headerText="Emails"
            textAlign="Left"
          ></e-column> -->
          <!-- <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
              <e-column field='Freight' headerText='Freight' textAlign='Right' :valueAccessor='currencyFormatter' width=80></e-column>
              <e-column field='ShipCity' headerText='Ship City' width=130 :valueAccessor='valueAccess' ></e-column> -->
        </e-columns>
      </ejs-grid>
    </transition>
    <button @click="showTable = !showTable" class="e-btn">
      {{ showTable ? "Hide Table" : "Show Table" }}
    </button>
  </div>
</template>

<script>
//https://www.syncfusion.com/feedback/28933/need-to-provide-compatibility-vitejs-support-for-vue-components
/* eslint-disable prettier/prettier */
import {
ColumnChooser, GridPlugin,
Page,
Toolbar
} from "@syncfusion/ej2-vue-grids";
import Vue from "vue";
Vue.use(GridPlugin);
export default {
  name: "App",
  data: () => ({
    showTable:true,
    columns:[
      {field:'UserName', headerText:"Username", visible:false},
      {field:'FirstName', headerText:"First Name", visible:true},
      {field:'LastName', headerText:"Last Name", visible:true},
      {field:'MiddleName', headerText:"Middle Name", visible:false},
      {field:'Gender', headerText:"Gender", visible:true},
      {field:'Age', headerText:"Age", visible:true},
      {field:'Emails', headerText:"Emails", visible:true},
      {field:'FavoriteFeature', headerText:"Favorite Feature", visible:false},
      {field:'Features', headerText:"Features", visible:false},
      {field:'AddressInfo', headerText:"Address Info", visible:false},
      {field:'HomeAddress', headerText:"Home Address", visible:false},
      
    ],
    pageSettings: { pageSize: 5 },
    toolbar: ["ColumnChooser"],
  }),
  provide: { grid: [Page, Toolbar, ColumnChooser] },
  computed: {
    people() {
      return this.$store.getters.people;
    },
  },
  async mounted() {
    await this.$store.dispatch("loadPeople");
  },
  methods: {
    customPlaceholder(args) {
      if (args.cell.innerText.trim() == "") {
        args.cell.innerText = "--";
      }
      if (args.column.field == "Gender") {
        console.log("Gender");
        if (args.cell.innerText == "Male") {
          args.cell.innerHTML = `<span class="material-symbols-outlined male">male</span>`;
        } else {
          args.cell.innerHTML = `<span class="material-symbols-outlined female">female</span>`;
        }
      }
    },
  },
};
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-calendars/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
@import "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,200,0,0";
button{
  margin-top:1.2rem
}
.male {
  color: rgb(0, 162, 255);
}
.female {
  color: rgb(254, 130, 155);
}
</style>
