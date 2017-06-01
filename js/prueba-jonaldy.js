// JavaScript Document

function pagar_tarjeta(){
    var tipo_documento = document.getElementById("tipo_documento").value;
    var documento = document.getElementById("documento").value;
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;
    var celular = document.getElementById("celular").value;
    var num_tarjeta = document.getElementById("num_tarjeta").value;
    var codigo_seguridad = document.getElementById("codigo_seguridad").value;
    var fecha_vencimiento = document.getElementById("fecha_vencimiento").value;
    var num_cuotas = document.getElementById("num_cuotas").value;
    
    // validaciones
    if(tipo_documento == 'seleccione'){
	alert('debes seleccionar un tipo de documento');
	return false;
    }
    else if(documento == ''){
	alert('debes ingresar un documento');
	return false;
    }
    else if(nombre == ''){
	alert('debes ingresar un nombre');
	return false;
    }
    else if(apellido == ''){
	alert('debes ingresar un apellido');
	return false;
    }
    else if(email == ''){
	alert('debes ingresar un email');
	return false;
    }
    else if(num_tarjeta == ''){
	alert('debes ingresar un numero de tarjeta');
	return false;
    }
    else if(codigo_seguridad == ''){
	alert('debes ingresar un codigo de seguridad');
	return false;
    }
    else if(fecha_vencimiento == ''){
	alert('debes ingresar una fecha de vencimiento');
	return false;
    }
    else if(num_cuotas == 'seleccione'){
	alert('debes selecionar el numero de cuotas');
	return false;
    }
    
    
    //enviar al backend
    var datos_enviar = {
	"tipo_documento" : tipo_documento,
	"documento" : documento,
	"nombre" : nombre,
	"apellido" : apellido,
	"email" : email,
	"celular" : celular,
	"num_tarjeta" : num_tarjeta,
	"codigo_seguridad" : codigo_seguridad,
	"fecha_vencimiento" : fecha_vencimiento,
	"num_cuotas" : num_cuotas
    };
    
    
     // stringify hace que se puedan ver como un texto
    
    // funcionalidad de enviar por ajax no implementada ya que se sale del requerimiento
    
    // segun la respuesta del backend se puede enviar para pago aceptado o rechazado, en este caso sera aceptado
//    window.location = 'estado-del-pago-aceptado.html';
    
    // o tambien se pueden pintar los datos directamente
    var tabla = "<table>\n\
                        <tr>\n\
                            <td>Documento</td>\n\
                            <td>"+tipo_documento+" "+documento+"</td>\n\
                        </tr>\n\
                        <tr>\n\
                            <td>Nombres y apellidos</td>\n\
                            <td>"+nombre+" "+apellido+"</td>\n\
                        </tr>\n\
                        <tr>\n\
                            <td>Correo</td>\n\
                            <td>"+email+"</td>\n\
                        </tr>\n\
                        <tr>\n\
                            <td>Celular</td>\n\
                            <td>"+celular+"</td>\n\
                        </tr>\n\
                        <tr>\n\
                            <td>Numero Tarjeta</td>\n\
                            <td>"+num_tarjeta+"</td>\n\
                        </tr>\n\
                        <tr>\n\
                            <td>Codigo Seguridad</td>\n\
                            <td>"+codigo_seguridad+"</td>\n\
                        </tr>\n\
                        <tr>\n\
                            <td>Fecha vencimiento</td>\n\
                            <td>"+fecha_vencimiento+"</td>\n\
                        </tr>\n\
                        <tr>\n\
                            <td>Numero cuotas</td>\n\
                            <td>"+num_cuotas+"</td>\n\
                        </tr>\n\
                        <tr>\n\
                            <td>Estado transaccion</td>\n\
                            <td>Aprobada</td>\n\
                        </tr>\n\
                    </table>";
    document.getElementById("columna_respuesta").innerHTML = tabla;
    document.getElementById("columna_respuesta").style.display = 'block';
    document.getElementById("columna_ppal").style.display = 'none';
    
    return false;
}

function pagar_pse(){
    var tipo_documento = document.getElementById("tipo_documento").value;
    var documento = document.getElementById("documento").value;
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;
    var celular = document.getElementById("celular").value;
    
    var banco = document.getElementById("banco").value;
    var tipo_cliente = document.getElementById("tipo_cliente").value;
    var tipo_cuenta = document.getElementById("tipo_cuenta").value;
    
    // validaciones
    if(tipo_documento == 'seleccione'){
	alert('debes seleccionar un tipo de documento');
	return false;
    }
    else if(documento == ''){
	alert('debes ingresar un documento');
	return false;
    }
    else if(nombre == ''){
	alert('debes ingresar un nombre');
	return false;
    }
    else if(apellido == ''){
	alert('debes ingresar un apellido');
	return false;
    }
    else if(email == ''){
	alert('debes ingresar un email');
	return false;
    }
    else if(banco == 'seleccione'){
	alert('debes selecionar un banco');
	return false;
    }
    else if(tipo_cliente == 'seleccione'){
	alert('debes selecionar un tipo de cliente');
	return false;
    }
    else if(tipo_cuenta == 'seleccione'){
	alert('debes selecionar el tipo cuenta');
	return false;
    }
    
    
    //enviar al backend
    var datos_enviar = {
	"tipo_documento" : tipo_documento,
	"documento" : documento,
	"nombre" : nombre,
	"apellido" : apellido,
	"email" : email,
	"banco" : banco,
	"tipo_cliente" : tipo_cliente,
	"tipo_cuenta" : tipo_cuenta
    };
    
    // stringify hace que se puedan ver como un texto
    
    // funcionalidad de enviar por ajax no implementada ya que se sale del requerimiento
    
    // segun la respuesta del backend se puede enviar para pago aceptado o rechazado, en este caso sera aceptado
    //window.location = 'estado-del-pago-rechazado.html';
    
    // o tambien se pueden pintar los datos directamente
    var tabla = "<table >\n\
                        <tr>\n\
                            <td>Documento</td>\n\
                            <td>"+tipo_documento+" "+documento+"</td>\n\
                        </tr>\n\
                        <tr>\n\
                            <td>Nombres y apellidos</td>\n\
                            <td>"+nombre+" "+apellido+"</td>\n\
                        </tr>\n\
                        <tr>\n\
                            <td>Correo</td>\n\
                            <td>"+email+"</td>\n\
                        </tr>\n\
                        <tr>\n\
                            <td>Celular</td>\n\
                            <td>"+celular+"</td>\n\
                        </tr>\n\
                        <tr>\n\
                            <td>Banco</td>\n\
                            <td>"+banco+"</td>\n\
                        </tr>\n\
                        <tr>\n\
                            <td>Tipo cliente</td>\n\
                            <td>"+tipo_cliente+"</td>\n\
                        </tr>\n\
                        <tr>\n\
                            <td>Tipo cuenta</td>\n\
                            <td>"+tipo_cuenta+"</td>\n\
                        </tr>\n\
                        <tr>\n\
                            <td>Estado transaccion</td>\n\
                            <td>Rechazada</td>\n\
                        </tr>\n\
                    </table>";
    document.getElementById("columna_respuesta").innerHTML = tabla;
    document.getElementById("columna_respuesta").style.display = 'block';
    document.getElementById("columna_ppal").style.display = 'none';
    
    
    return false;
}