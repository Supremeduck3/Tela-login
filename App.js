import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";



export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imagem}
        source={require("./assets/upscalemedia-transformed.jpeg")}
      />
      <View>
        <Text style={styles.texto}>Bem-vindo de volta</Text>
        <StatusBar style="auto" />
        <Text style={styles.subtexto}>Acesse sua conta do senai</Text>
      </View>
      <View  style={styles.emailsenha}>
        <View>
          <Text style={styles.textemail}>E-mail</Text>
          <View style={styles.caixaEmail}>
          <Image
          style={styles.imagemEmail}
           source={require("./assets/email (1).png")}
          ></Image>
          <Text style={styles.textintcaixa}>Seu@email.com</Text>
        </View>
        </View>
        <View>
          <Text style={styles.textsenha}>Senha</Text>
          <View style={styles.caixaSenha}>
            <Image
            style={styles.imagemsenha}
           source={require("./assets/cadeado.png")}></Image>
            <Text style={styles.texintsenha}>*******</Text>
          </View>
          <View style={styles.esquecisenha1}>
        <Text style={styles.esquecisenha}>Esqueci minha senha</Text>
      </View>
        </View>
      </View>
      <View style={styles.botao}>
        <Text style={styles.textintbotao}>Entrar</Text>
      </View>
      <View style={styles.logos}>
        <View style={styles.linhas}>
          <View style={styles.linha} />
        <Text style={styles.textou}> ou entre com</Text>
        <View style={styles.linha} />
        </View>
      <View style={styles.semconta}>
        <Image
            style={styles.imagemlogos}
           source={require("./assets/logos.png")}>
           </Image>
           <View style={styles.cadastro}>
            <Text style={styles.texto1}>Não tem uma conta ?</Text>
            <Text style={styles.texto2}>Cadastre-se</Text>
           </View>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F9",
    alignItems: "center",
    justifyContent: "start",
    flexDirection: "columm",
    gap: 50,
  },
  imagem: {
    justifyContent: "center",
    width: 80,
    height: 80,
    borderRadius: 15,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    elevation: 10,
    shadowColor: "#8b00fd",
    marginTop: 70,
  },
  texto: {
    fontSize: 34,
    fontWeight: "bold",
  },
  subtexto: {
    color: "grey",
  },
  textemail: {
    color:"grey"
  },
  caixaEmail: {
    height: 60,
    width: 310,
    borderRadius: 15,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    elevation: 5,
    backgroundColor: "#ffffff",
    justifyContent:'start',
    alignItems:'center',
    flexDirection:'row'
  },
  textintcaixa:{
    color:'grey',
    marginLeft:5,
  },
  imagemEmail:{
    height:20,
    width:20,
    marginLeft:5,
  },
  caixaSenha:{
    height: 60,
    width: 310,
    borderRadius: 15,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    elevation: 5,
    backgroundColor: "#ffffff",
    justifyContent:'start',
    alignItems:'center',
    flexDirection:'row',
  },
  textsenha:{
    color:"grey",
  },
  texintsenha:{
    color:"grey",
    marginLeft:5,
  },
  imagemsenha:{
    height:30,
    width:20,
    marginLeft:5,
  },
  emailsenha:{
    gap:20,
  },
  esquecisenha:{
    justifyContent:'end',
    color:"#9c0dee",
  },
  esquecisenha1:{
    alignItems:"flex-end"
  },
  botao:{
    width:310,
    height:65,
    backgroundColor:"#800ff2",
    borderRadius:10,
    justifyContent:"center",
    alignItems:"center",
  },
  textintbotao:{
    color:"white",
    fontWeight:"bold",
    fontSize:20,
  },
  logos:{
    justifyContent:'center',
    alignItems:'center',
    gap:10,
  },
  imagemlogos:{
    height:70,
    width:200,
  },
  textou:{
    color:"grey",
  },
  linha:{
    backgroundColor:"grey",
    opacity:0.4,
    width:110,
    height:1,
  },
  linhas:{
    flexDirection:"row",
    alignItems:'center',
    gap:5,
  },
  semconta:{
    alignItems:"center",
    gap:5,
  },
  cadastro:{
    flexDirection:"row",
    gap:5,
  },
  texto1:{
    color:"grey",

  },
  texto2:{
    color:"purple",
    fontWeight:"bold",
  }
});
