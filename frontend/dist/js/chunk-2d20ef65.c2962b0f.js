(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20ef65"],{b232:function(e,t,o){"use strict";o.r(t);var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("navAlum"),o("v-container",{staticClass:"scroll-y"},[o("v-layout",{attrs:{"align-center":"","justify-center":""}},[o("v-flex",{attrs:{xs12:""}},[o("Info"),o("br"),o("Proyecto"),o("br"),e.visible?o("Metodologia"):e._e(),o("br"),o("v-btn",{directives:[{name:"scroll",rawName:"v-scroll",value:e.onScroll,expression:"onScroll"}],staticStyle:{outline:"none","text-decoration":"none"},attrs:{fab:"",dark:"",fixed:"",bottom:"",small:"",left:"",color:"blue"},on:{click:e.toIndex}},[o("v-icon",[e._v("fa fa-arrow-left")])],1)],1)],1)],1)],1)},a=[],n=(o("a4d3"),o("4de4"),o("4160"),o("e439"),o("dbb4"),o("b64b"),o("ac1f"),o("5319"),o("159b"),o("8785")),i=(o("96cf"),o("1da1")),c=o("ade3"),s=o("b6a5"),l=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("v-snackbar",{attrs:{color:"green",top:""},model:{value:e.msjsuccess,callback:function(t){e.msjsuccess=t},expression:"msjsuccess"}},[e._v("¡Datos actualizados! "),o("v-btn",{staticStyle:{outline:"none"},attrs:{color:"white",text:""},on:{click:function(t){e.msjsuccess=!1}}},[e._v("Cerrar")])],1),o("v-snackbar",{attrs:{color:"red",top:""},model:{value:e.msjerror,callback:function(t){e.msjerror=t},expression:"msjerror"}},[e._v("¡"+e._s(e.msjErrorRegistro)+"! "),o("v-btn",{staticStyle:{outline:"none"},attrs:{color:"white",text:""},on:{click:function(t){e.msjerror=!1}}},[e._v("Cerrar")])],1),o("v-card",{attrs:{elevation:"6"}},[o("v-toolbar",[o("v-card-title",[e._v("Datos personales")]),o("v-spacer"),o("v-icon",[e._v("fa fa-user")])],1),o("v-card-text",[o("v-form",{model:{value:e.esValido,callback:function(t){e.esValido=t},expression:"esValido"}},[o("v-container",{attrs:{fluid:""}},[o("v-card-subtitle",{staticClass:"subtitle-2 font-weight-black",staticStyle:{padding:"5px"}},[o("strong",[e._v("Información del alumno")])]),o("v-row",[o("v-col",{attrs:{cols:"12",sm:"6",md:"6",lg:"4"}},[o("v-text-field",{attrs:{rules:e.nombre,disabled:e.actualizar,"prepend-icon":"fa fa-user",label:"Nombre",dense:""},model:{value:e.datoAlumno.alumno,callback:function(t){e.$set(e.datoAlumno,"alumno",t)},expression:"datoAlumno.alumno"}})],1),o("v-col",{attrs:{cols:"12",sm:"6",md:"6",lg:"4"}},[o("v-text-field",{attrs:{rules:e.apellidoP,disabled:e.actualizar,"prepend-icon":"fa fa-id-card",label:"Apellido paterno",dense:""},model:{value:e.datoAlumno.ape_p,callback:function(t){e.$set(e.datoAlumno,"ape_p",t)},expression:"datoAlumno.ape_p"}})],1),o("v-col",{attrs:{cols:"12",sm:"6",md:"6",lg:"4"}},[o("v-text-field",{attrs:{rules:e.apellidoM,disabled:e.actualizar,"prepend-icon":"fa fa-id-card",label:"Apellido materno",dense:""},model:{value:e.datoAlumno.ape_m,callback:function(t){e.$set(e.datoAlumno,"ape_m",t)},expression:"datoAlumno.ape_m"}})],1)],1),o("v-row",[o("v-col",{attrs:{cols:"12",sm:"6",md:"6",lg:"4"}},[o("v-text-field",{attrs:{rules:e.reglaDomicilio,disabled:e.actualizar,"prepend-icon":"fa fa-map-marker",label:"Domicilio",dense:""},model:{value:e.datoAlumno.domicilio,callback:function(t){e.$set(e.datoAlumno,"domicilio",t)},expression:"datoAlumno.domicilio"}})],1),o("v-col",{attrs:{cols:"12",sm:"6",md:"6",lg:"4"}},[o("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:e.mask,expression:"mask"}],attrs:{rules:e.reglaTelefono,disabled:e.actualizar,"prepend-icon":"fa fa-phone",label:"Número de telefono",dense:""},model:{value:e.datoAlumno.telefono,callback:function(t){e.$set(e.datoAlumno,"telefono",t)},expression:"datoAlumno.telefono"}})],1),o("v-col",{attrs:{cols:"12",sm:"6",md:"6",lg:"4"}},[o("v-text-field",{attrs:{rules:e.reglaCorreo,disabled:e.actualizar,"prepend-icon":"fa fa-envelope",label:"Correo",dense:""},model:{value:e.datoAlumno.correo,callback:function(t){e.$set(e.datoAlumno,"correo",t)},expression:"datoAlumno.correo"}})],1)],1),o("v-card-subtitle",{staticClass:"subtitle-2 font-weight-black",staticStyle:{padding:"5px"}},[o("strong",[e._v("Información escolar")])]),o("v-row",[o("v-col",{attrs:{cols:"12",sm:"6",md:"6",lg:"4"}},[o("v-text-field",{attrs:{rules:e.reglaInstitucion,disabled:e.actualizar,"prepend-icon":"fa fa-university",label:"Institución",dense:""},model:{value:e.datoAlumno.institucion,callback:function(t){e.$set(e.datoAlumno,"institucion",t)},expression:"datoAlumno.institucion"}})],1),o("v-col",{attrs:{cols:"12",sm:"6",md:"6",lg:"4"}},[o("v-text-field",{attrs:{rules:e.reglaCarrera,disabled:e.actualizar,"prepend-icon":"fa fa-graduation-cap",label:"Carrera",dense:""},model:{value:e.datoAlumno.carrera,callback:function(t){e.$set(e.datoAlumno,"carrera",t)},expression:"datoAlumno.carrera"}})],1),o("v-col",{attrs:{cols:"12",sm:"6",md:"6",lg:"4"}},[o("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:e.mask1,expression:"mask1"}],attrs:{rules:e.reglaSemestre,disabled:e.actualizar,type:"text","prepend-icon":"fa fa-sort",label:"Semestre",min:"1",max:"13",dense:""},model:{value:e.datoAlumno.semestre_cursado,callback:function(t){e.$set(e.datoAlumno,"semestre_cursado",t)},expression:"datoAlumno.semestre_cursado"}})],1)],1),o("v-card-subtitle",{staticClass:"subtitle-2 font-weight-black",staticStyle:{padding:"5px"}},[o("strong",[e._v("Cuenta")])]),o("v-row",[o("v-col",{attrs:{cols:"12",sm:"6",md:"6",lg:"4"}},[o("v-text-field",{attrs:{rules:e.reglaUsuario,disabled:e.actualizar,"prepend-icon":"fa fa-user",label:"Usuario",dense:""},model:{value:e.datoAlumno.usuario,callback:function(t){e.$set(e.datoAlumno,"usuario",t)},expression:"datoAlumno.usuario"}})],1),o("v-col",{attrs:{cols:"12",sm:"6",md:"6",lg:"4"}},[o("v-text-field",{attrs:{rules:e.pswAlumno,disabled:e.actualizar,"prepend-icon":"fa fa-lock",label:"Contraseña",dense:"","append-icon":e.show?"fa fa-eye":"fa fa-eye-slash",type:e.show?"text":"password"},on:{"click:append":function(t){e.show=!e.show}},model:{value:e.datoAlumno.psw,callback:function(t){e.$set(e.datoAlumno,"psw",t)},expression:"datoAlumno.psw"}})],1),o("v-col",{attrs:{cols:"12",sm:"6",md:"6",lg:"4"}},[o("v-text-field",{attrs:{disabled:e.actualizar,rules:e.confirmacionPsw,"prepend-icon":"fa fa-lock",label:"Contraseña",dense:"","append-icon":e.show1?"fa fa-eye":"fa fa-eye-slash",type:e.show1?"text":"password"},on:{"click:append":function(t){e.show1=!e.show1}},model:{value:e.pswConfirm,callback:function(t){e.pswConfirm=t},expression:"pswConfirm"}})],1)],1),e.actualizar?o("v-row",{attrs:{justify:"center"}},[o("v-col",{attrs:{cols:"12",sm:"4",md:"4",lg:"4"}},[o("v-btn",{staticStyle:{outline:"none"},attrs:{block:"",outlined:"",color:"orange darken-2"},on:{click:e.cancelarActualizacion}},[e._v("Modificar")])],1)],1):o("v-row",[o("v-col",{attrs:{cols:"12",sm:"6",md:"6",lg:"6"}},[o("v-btn",{staticStyle:{outline:"none"},attrs:{block:"",outlined:"",color:"red"},on:{click:e.cancelarActualizacion}},[e._v("Cancelar")])],1),o("v-col",{attrs:{cols:"12",sm:"6",md:"6",lg:"6"}},[o("v-btn",{staticStyle:{outline:"none"},attrs:{block:"",outlined:"",color:"success",disabled:!e.esValido},on:{click:e.actualizarDatos}},[e._v("Actualizar")])],1)],1)],1)],1)],1)],1)],1)},u=[],d=o("6fab"),m=o("9530"),p=o.n(m),f=o("2f62"),v=o("3a60");function b(){var e=Object(n["a"])(["\n            mutation($_id: String!, $alumno: String!, $ape_p: String!, $ape_m: String!, $correo: String!, $telefono: String!, $institucion: String!, $carrera: String!, $semestre_cursado: String!, $domicilio: String!, $usuario: String!, $clave: String!)\n            {\n              actualizarALumno(_id: $_id, alumno: $alumno, ape_p: $ape_p, ape_m: $ape_m, correo: $correo, telefono: $telefono, institucion: $institucion, carrera: $carrera, semestre_cursado: $semestre_cursado, domicilio: $domicilio, usuario: $usuario, clave: $clave)\n            }\n          "]);return b=function(){return e},e}function g(){var e=Object(n["a"])(["\n              query($usuario: String!)\n              {\n                infoAlumno(usuario: $usuario){\n                  _id\n                  alumno\n                  ape_p\n                  ape_m\n                  correo\n                  telefono\n                  institucion\n                  carrera\n                  semestre_cursado\n                  domicilio\n                  usuario\n                }\n              }    \n          "]);return g=function(){return e},e}function A(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function y(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?A(Object(o),!0).forEach((function(t){Object(c["a"])(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):A(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var h={name:"InfoDelAlumno",directives:{mask:v["mask"],mask1:v["mask1"]},data:function(){return{esValido:!0,actualizar:!0,msjsuccess:!1,msjerror:!1,msjErrorRegistro:"",show:!1,show1:!1,mask:"(###)-###-####",mask1:"##",modificar:!0,pswConfirm:"",datoAlumno:{_id:"",alumno:"",ape_p:"",ape_m:"",correo:"",telefono:"",institucion:"",carrera:"",semestre_cursado:"",domicilio:"",usuario:"",psw:""},nombre:[function(e){return!!e||"El nombre es requerido"},function(e){var t=/[`~!@#$%^&*()_°¬|+\-=?;:'"1234567890,<>\{\}\[\]\\\/]/gi;return!t.test(e)||"Solo se permiten letras"}],apellidoP:[function(e){return!!e||"El apellido paterno es requerido"},function(e){var t=/[`~!@#$%^&*()_°¬|+\-=?;:'"1234567890,<>\{\}\[\]\\\/]/gi;return!t.test(e)||"Solo se permiten letras"}],apellidoM:[function(e){return!!e||"El apellido materno es requerido"},function(e){var t=/[`~!@#$%^&*()_°¬|+\-=?;:'"1234567890,<>\{\}\[\]\\\/]/gi;return!t.test(e)||"Solo se permiten letras"}],reglaDomicilio:[function(e){return!!e||"El domicilio es requerido"}],reglaTelefono:[function(e){return!!e||"El número de teléfono es requerido"},function(e){return 14===(e||"").length||"Solo se permiten 10 digitos"}],reglaCorreo:[function(e){return!!e||"El correo es requerido"},function(e){var t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(e)||"Correo invalido"},function(e){return/.+@.+/.test(e)||"El correo debe de ser valido"}],reglaInstitucion:[function(e){return!!e||"La institución es requerida"},function(e){var t=/[`~!@$%^&*()_°¬|+\-=?;:'",<>\{\}\[\]\\\/]/gi;return!t.test(e)||"Solo se permiten letras"}],reglaCarrera:[function(e){return!!e||"La carrera es requerida"},function(e){var t=/[`~!@#$%^&*()_°¬|+\-=?;:'"1234567890,<>\{\}\[\]\\\/]/gi;return!t.test(e)||"Solo se permiten letras"}],reglaSemestre:[function(e){return!!e||"El semestre es requerido"},function(e){return(e||"")>=1||"Semestre incorrecto"},function(e){return(e||"")<=12||"Semestre incorrecto"}],reglaUsuario:[function(e){return!!e||"El usuario es requerido"},function(e){return(e||"").length>7||"Minimo 8 caracteres"}],pswAlumno:[function(e){return(e||"").length>7||0==(e||"").length||"Minimo 8 caracteres"}]}},computed:y({},Object(f["d"])(["usuarioLogeado"]),{confirmacionPsw:function(){return[this.datoAlumno.psw===this.pswConfirm||"La contraseña no coincide"]}}),methods:y({cancelarActualizacion:function(){console.log("acc"),this.obtenerDatosAlumno(),this.datoAlumno.psw="",this.pswConfirm="",this.actualizar=!this.actualizar,this.desactivar=!this.desactivar}},Object(f["c"])(["guardarUsuarioLog"]),{obtenerDatosAlumno:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var o,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$apollo.query({query:p()(g()),variables:{usuario:e.usuarioLogeado.nom_usuario}});case 3:o=t.sent,r=o.data,e.datoAlumno._id=r.infoAlumno._id,e.datoAlumno.alumno=r.infoAlumno.alumno,e.datoAlumno.ape_p=r.infoAlumno.ape_p,e.datoAlumno.ape_m=r.infoAlumno.ape_m,e.datoAlumno.correo=r.infoAlumno.correo,e.datoAlumno.telefono=r.infoAlumno.telefono,e.datoAlumno.institucion=r.infoAlumno.institucion,e.datoAlumno.carrera=r.infoAlumno.carrera,e.datoAlumno.semestre_cursado=r.infoAlumno.semestre_cursado,e.datoAlumno.domicilio=r.infoAlumno.domicilio,e.datoAlumno.usuario=r.infoAlumno.usuario,t.next=21;break;case 18:t.prev=18,t.t0=t["catch"](0),console.log(t.t0);case 21:case"end":return t.stop()}}),t,null,[[0,18]])})))()},actualizarDatos:function(e){var t=this;e.commit,e.state;return Object(i["a"])(regeneratorRuntime.mark((function e(){var o,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d["a"].mutate({mutation:p()(b()),variables:{_id:t.datoAlumno._id,alumno:t.datoAlumno.alumno,ape_p:t.datoAlumno.ape_p,ape_m:t.datoAlumno.ape_m,correo:t.datoAlumno.correo,telefono:t.datoAlumno.telefono,institucion:t.datoAlumno.institucion,carrera:t.datoAlumno.carrera,semestre_cursado:t.datoAlumno.semestre_cursado,domicilio:t.datoAlumno.domicilio,usuario:t.datoAlumno.usuario,clave:t.datoAlumno.psw}});case 3:o=e.sent,r=o.data,a=r.actualizarALumno,console.log(a),e.t0=a,e.next="Usuario existente"===e.t0?10:"Correo existente"===e.t0?13:16;break;case 10:return t.msjErrorRegistro=a,t.msjerror=!0,e.abrupt("break",20);case 13:return t.msjErrorRegistro=a,t.msjerror=!0,e.abrupt("break",20);case 16:return t.msjsuccess=!0,localStorage.setItem("token",r.actualizarALumno),t.guardarUsuarioLog(),e.abrupt("break",20);case 20:t.obtenerDatosAlumno(),e.next=26;break;case 23:e.prev=23,e.t1=e["catch"](0),console.log(e.t1);case 26:case"end":return e.stop()}}),e,null,[[0,23]])})))()}}),mounted:function(){this.obtenerDatosAlumno()}},x=h,j=o("2877"),w=o("6544"),_=o.n(w),k=o("8336"),S=o("b0af"),$=o("99d9"),O=o("62ad"),C=o("a523"),V=o("4bd4"),M=o("132d"),P=o("0fd9"),R=o("2db4"),z=o("2fa4"),D=o("8654"),E=o("71d9"),q=Object(j["a"])(x,l,u,!1,null,null,null),T=q.exports;_()(q,{VBtn:k["a"],VCard:S["a"],VCardSubtitle:$["b"],VCardText:$["c"],VCardTitle:$["d"],VCol:O["a"],VContainer:C["a"],VForm:V["a"],VIcon:M["a"],VRow:P["a"],VSnackbar:R["a"],VSpacer:z["a"],VTextField:D["a"],VToolbar:E["a"]});var L=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("v-card",{staticClass:"my-4",attrs:{elevation:"6"}},[o("v-card-title",[e._v("Proyectos solicitados "),o("v-spacer"),o("v-text-field",{attrs:{"prepend-icon":"fa fa-search",label:"Buscar proyecto por nombre"},model:{value:e.filtro,callback:function(t){e.filtro=t},expression:"filtro"}})],1),o("v-data-table",{attrs:{headers:e.headers,search:e.filtro,"no-data-text":"No has realizado ninguna solicitud",loading:e.loading,"loading-text":"Cargando...","no-results-text":"Proyecto no encontrado","footer-props":{itemsPerPageText:"Paginación"},items:e.misSolicitudes},scopedSlots:e._u([{key:"item.acciones",fn:function(t){var r=t.item;return[o("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[o("v-btn",e._g({staticStyle:{outline:"none"},attrs:{text:"",icon:"",color:"red",disabled:"cancelado"===r.status},on:{click:function(t){return e.cancelarSolicitud(r)}}},a),[o("v-icon",[e._v("fa fa-ban")])],1)]}}],null,!0)},["Aceptado"!=r.status?o("span",[e._v("Cancelar solicitud")]):o("span",[e._v("Cancelar proyecto")])]),"Aceptado"===r.status?o("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[o("v-btn",e._g({staticStyle:{outline:"none"},attrs:{text:"",icon:"",color:"blue"},on:{click:function(t){return e.verficarMetodologia(r.nombre,r.proyecto)}}},a),[o("v-icon",[e._v("fa fa-file")])],1)]}}],null,!0)},[o("span",[e._v("Agregar metodologia")])]):e._e(),"Aceptado"===r.status?o("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[o("v-btn",e._g({staticStyle:{outline:"none"},attrs:{text:"",icon:"",color:"blue"},on:{click:function(t){return e.abrirMsjRepositorio(r.nombre,r.proyecto)}}},a),[o("v-icon",[e._v("fa fa-code-branch")])],1)]}}],null,!0)},[o("span",[e._v("Agregar repositorio")])]):e._e()]}},{key:"item.status",fn:function(t){var r=t.item;return[o("v-chip",{attrs:{color:e.obtenerColor(r.status),dark:""}},[e._v(e._s(r.status))])]}}])})],1),o("CancelarSolicitud",{attrs:{cancelarSolicitudAlumno:e.alertaCancelar}}),o("AgregarMetodologia",{attrs:{modalAlertaMetodologia:e.alertaMetodologia}}),o("MsjAgregarRepositorio",{attrs:{msjAgregarRepositorio:e.abrirMsjAddRepo}})],1)},I=[],N=(o("e01a"),o("d28b"),o("d3b7"),o("3ca3"),o("ddb0"),function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("v-snackbar",{attrs:{color:"green",top:""},model:{value:e.msjsuccess,callback:function(t){e.msjsuccess=t},expression:"msjsuccess"}},[e._v("¡Solicitud cancelada! "),o("v-btn",{staticStyle:{outline:"none"},attrs:{color:"white",text:""},on:{click:function(t){e.msjsuccess=!1}}},[e._v("Cerrar")])],1),o("v-row",{attrs:{justify:"center"}},[o("v-dialog",{attrs:{"max-width":"350",persistent:""},model:{value:e.cancelarSolicitudAlumno,callback:function(t){e.cancelarSolicitudAlumno=t},expression:"cancelarSolicitudAlumno"}},[o("v-card",[o("v-toolbar",{attrs:{color:"red",dark:""}},[o("v-row",{attrs:{justify:"center"}},[o("v-card-title",[e._v("¡Alerta!")])],1)],1),o("v-card-text",[o("v-row",{staticClass:"mt-4",attrs:{justify:"center"}},[o("p",{staticClass:"text-center"},[o("strong",[e._v("¿Está seguro que desea cancelar la solicitud de este proyecto?")])])]),o("v-divider"),o("v-row",{attrs:{justify:"center"}},[o("v-col",{attrs:{cols:"6",sm:"6"}},[o("v-btn",{staticClass:"mx-5",staticStyle:{width:"100px",height:"35px",outline:"none"},attrs:{color:"error",outlined:""},on:{click:e.cerrarCancelarSolicitud}},[e._v("Cancelar")])],1),o("v-col",{attrs:{cols:"6",sm:"6"}},[o("v-btn",{staticClass:"mx-4",staticStyle:{width:"100px",height:"35px",outline:"none"},attrs:{color:"success",outlined:""},on:{click:e.cancelarSolicitudProyecto}},[e._v("Aceptar")])],1)],1)],1)],1)],1)],1)],1)}),U=[],B=o("d3e3");function F(){var e=Object(n["a"])(["\n                        mutation($nombre: String!, $proyecto: String!)\n                        {\n                            cancelarSolicitudAlumno(nombre: $nombre, proyecto: $proyecto)\n                        }\n                    "]);return F=function(){return e},e}var J={name:"CancelarSolicitud",props:["cancelarSolicitudAlumno"],data:function(){return{nomProyecto:"",nomLab:"",msjsuccess:!1}},methods:{cerrarCancelarSolicitud:function(){B["a"].$emit("cerrarAlertaCancelarSolicitud")},cancelarSolicitudProyecto:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d["a"].mutate({mutation:p()(F()),variables:{nombre:e.nomLab,proyecto:e.nomProyecto}});case 3:o=t.sent,o.data,B["a"].$emit("actualizarTablaSolicitudes"),e.msjsuccess=!0,setTimeout((function(){e.msjsuccess=!1}),3e3),e.cerrarCancelarSolicitud(),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))()}},mounted:function(){var e=this;B["a"].$on("datosCancelarProyecto",(function(t,o){e.nomProyecto=t,e.nomLab=o}))}},Z=J,Y=o("169a"),G=o("ce7e"),H=Object(j["a"])(Z,N,U,!1,null,null,null),K=H.exports;_()(H,{VBtn:k["a"],VCard:S["a"],VCardText:$["c"],VCardTitle:$["d"],VCol:O["a"],VDialog:Y["a"],VDivider:G["a"],VRow:P["a"],VSnackbar:R["a"],VToolbar:E["a"]});var Q=o("ab9f"),W=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("v-dialog",{attrs:{"max-width":"400",persistent:""},model:{value:e.msjAgregarRepositorio,callback:function(t){e.msjAgregarRepositorio=t},expression:"msjAgregarRepositorio"}},[o("v-card",[o("v-toolbar",{attrs:{color:"success",dark:""}},[o("v-row",{attrs:{justify:"center"}},[o("v-card-title",[e._v("¡Mensaje!")])],1)],1),o("v-card-text",[o("v-row",{staticClass:"mt-4",attrs:{justify:"center"}},[o("p",{staticClass:"text-center"},[e._v(" El proyecto "),o("strong",[e._v("solo aceptara un repositorio")]),e._v(" puede usar la plataforma de "),o("strong",[e._v("github o gitlab")]),e._v(" para el alogamiento del proyecto o alguna otra plataforma que conozca. ")])]),o("v-divider"),o("v-row",{attrs:{justify:"center"}},[o("v-col",{attrs:{cols:"6",sm:"6"}},[o("v-btn",{staticClass:"mx-8",staticStyle:{width:"100px",height:"35px",outline:"none"},attrs:{color:"error",outlined:""},on:{click:e.cerrarModal}},[e._v("Cancelar")])],1),o("v-col",{attrs:{cols:"6",sm:"6"}},[o("v-btn",{staticClass:"mx-7",staticStyle:{width:"100px",height:"35px",outline:"none"},attrs:{color:"blue",outlined:""},on:{click:e.abrirModalAgregarRepo}},[e._v("Agregar")])],1)],1)],1)],1)],1),o("Repositorio",{attrs:{agregarRepositorio:e.abrirAgregarRepositorio}})],1)},X=[],ee=o("c0d2"),te={name:"MsjAgregarRepositorio",props:["msjAgregarRepositorio"],components:{Repositorio:ee["a"]},data:function(){return{abrirAgregarRepositorio:!1}},methods:{abrirModalAgregarRepo:function(){B["a"].$emit("cambiarVariableRepositorio1"),this.abrirAgregarRepositorio=!0,this.cerrarModal()},cerrarModal:function(){B["a"].$emit("cerrarMsjAgregarRepositorio")}},mounted:function(){var e=this;B["a"].$on("cerrarModalAgregarRepositorio",(function(){e.abrirAgregarRepositorio=!1,e.cerrarModal()}))}},oe=te,re=Object(j["a"])(oe,W,X,!1,null,null,null),ae=re.exports;function ne(){var e=Object(n["a"])(["\n            query($nombre: String!, $proyecto: String!)\n            {\n              existeMetod(nombre: $nombre, proyecto: $proyecto)\n            }\n          "]);return ne=function(){return e},e}function ie(){var e=Object(n["a"])(["\n            query\n            {\n              misSolicitudes{\n                nombre\n                proyecto\n                status\n              }\n            }\n          "]);return ie=function(){return e},e}function ce(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function se(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?ce(Object(o),!0).forEach((function(t){Object(c["a"])(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):ce(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}_()(re,{VBtn:k["a"],VCard:S["a"],VCardText:$["c"],VCardTitle:$["d"],VCol:O["a"],VDialog:Y["a"],VDivider:G["a"],VRow:P["a"],VToolbar:E["a"]});var le={name:"Proyectos",components:{CancelarSolicitud:K,AgregarMetodologia:Q["a"],MsjAgregarRepositorio:ae},data:function(){return{validacionMetodologia:"",filtro:"",loading:!1,alertaMetodologia:!1,abrirMsjAddRepo:!1,alertaCancelar:!1,nomProyecto:"",nomLaboratorio:"",existeMetod:!1,nomMetod:"",headers:[{text:"Numero",value:"numero",filerable:!1},{text:"Nombre",value:"proyecto"},Object(c["a"])({text:"Laboratorio",value:"nombre",filerable:!1,align:"center",sortable:!1},"value","nombre"),Object(c["a"])({text:"Estatus",value:"status",filerable:!1,align:"center",sortable:!1},"value","status"),Object(c["a"])({text:"Acciones",value:"acciones",filerable:!1,align:"center",sortable:!1},"value","acciones")],misSolicitudes:[]}},computed:se({},Object(f["d"])(["usuarioLogeado"])),methods:{abrirMsjRepositorio:function(e,t){B["a"].$emit("datamsjrepo",e,t),this.abrirMsjAddRepo=!0},obtenerColor:function(e){return"En espera"===e?"orange":"Aceptado"===e?"green":"red"},solicitudesProyectos:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var o,r,a,n,i,c,s,l,u,d,m;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$apollo.query({query:p()(ie())});case 3:for(o=t.sent,r=o.data,a=0,n=!0,i=!1,c=void 0,t.prev=9,s=r.misSolicitudes[Symbol.iterator]();!(n=(l=s.next()).done);n=!0)u=l.value,a+=1,d="numero",m=""+a,u[d]=m;t.next=17;break;case 13:t.prev=13,t.t0=t["catch"](9),i=!0,c=t.t0;case 17:t.prev=17,t.prev=18,n||null==s.return||s.return();case 20:if(t.prev=20,!i){t.next=23;break}throw c;case 23:return t.finish(20);case 24:return t.finish(17);case 25:e.misSolicitudes=r.misSolicitudes,t.next=30;break;case 28:t.prev=28,t.t1=t["catch"](0);case 30:case"end":return t.stop()}}),t,null,[[0,28],[9,13,17,25],[18,,20,24]])})))()},cancelarSolicitud:function(e){this.nomProyecto=e.proyecto,this.nomLaboratorio=e.nombre,B["a"].$emit("datosCancelarProyecto",this.nomProyecto,this.nomLaboratorio),this.alertaCancelar=!0},verficarMetodologia:function(e,t){var o=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n,i,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,o.$apollo.query({query:p()(ne()),variables:{nombre:e,proyecto:t}});case 3:a=r.sent,n=a.data,null!=n.existeMetod?(o.nomMetod=n.existeMetod,B["a"].$emit("tablaMetodologiaVisible",e,t,o.nomMetod)):(i=e,c=t,o.alertaMetodologia=!0,B["a"].$emit("datosMetodologia",i,c)),r.next=10;break;case 8:r.prev=8,r.t0=r["catch"](0);case 10:case"end":return r.stop()}}),r,null,[[0,8]])})))()}},mounted:function(){var e=this;B["a"].$on("cerrarAlertaCancelarSolicitud",(function(){e.alertaCancelar=!1})),B["a"].$on("actualizarTablaSolicitudes",(function(){e.solicitudesProyectos()})),B["a"].$on("cerrarModalAlertaMetodologia",(function(){e.alertaMetodologia=!1})),B["a"].$on("cerrarMsjAgregarRepositorio",(function(){e.abrirMsjAddRepo=!1})),this.solicitudesProyectos()}},ue=le,de=o("cc20"),me=o("8fea"),pe=o("3a2f"),fe=Object(j["a"])(ue,L,I,!1,null,null,null),ve=fe.exports;_()(fe,{VBtn:k["a"],VCard:S["a"],VCardTitle:$["d"],VChip:de["a"],VDataTable:me["a"],VIcon:M["a"],VSpacer:z["a"],VTextField:D["a"],VTooltip:pe["a"]});var be=o("d311");function ge(){var e=Object(n["a"])(["\n                    query($nombre: String!, $proyecto: String!)\n                    {\n                    existeMetod(nombre: $nombre, proyecto: $proyecto)\n                    }\n                "]);return ge=function(){return e},e}function Ae(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function ye(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?Ae(Object(o),!0).forEach((function(t){Object(c["a"])(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):Ae(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var he={name:"Perfil",components:{navAlum:s["a"],Info:T,Proyecto:ve,Metodologia:be["a"]},data:function(){return{visible:!1}},created:function(){this.guardarUsuarioLog()},methods:ye({onScroll:function(e){if("undefined"!==typeof window){var t=window.pageYOffset||e.target.scrollTop||0;this.fab=t>20}},toTop:function(){this.$vuetify.goTo(0)}},Object(f["c"])(["guardarUsuarioLog"]),{existeMetodologia:function(e,t){var o=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,o.$apollo.query({query:p()(ge()),variables:{nombre:e,proyecto:t}});case 3:a=r.sent,a.data,r.next=9;break;case 7:r.prev=7,r.t0=r["catch"](0);case 9:case"end":return r.stop()}}),r,null,[[0,7]])})))()},toIndex:function(){window.location.replace("/proyectos")}}),mounted:function(){var e=this;B["a"].$on("tablaMetodologiaVisible",(function(t,o,r){e.visible=!0,setTimeout((function(){B["a"].$emit("tablaMetodologiaDatos",t,o,r)}),100)}))}},xe=he,je=o("0e8f"),we=o("a722"),_e=o("269a"),ke=o.n(_e),Se=o("f977"),$e=Object(j["a"])(xe,r,a,!1,null,null,null);t["default"]=$e.exports;_()($e,{VBtn:k["a"],VContainer:C["a"],VFlex:je["a"],VIcon:M["a"],VLayout:we["a"]}),ke()($e,{Scroll:Se["a"]})}}]);
//# sourceMappingURL=chunk-2d20ef65.c2962b0f.js.map