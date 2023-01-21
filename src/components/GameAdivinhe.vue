<template>
    <div>
        <h1>GAME PSIQUS ADIVINHER</h1>
        <input type="number" min="0" max="100" placeholder="digite um numero" v-if="!chuteAcerto" v-model="numeroAdivinha">
        <button @click="makeAcerto" v-if="!chuteAcerto">ENVIAR NUMERO P/ ADIVINHAR</button>
        <input type="number" min="0" max="100" v-model="chuteNumero" placeholder="Adivinhe o numero chutado:">
        <button @click="adivinhar">ADIVINHAR</button>
        <p>MEUS PONTOS: {{ pontos }}</p>
        <p>PONTOS DO INIMIGO: {{ pontosFriend }}</p>
    </div>
</template>
<script lang="ts">
import type { ActionSender} from 'trystero'
//import { joinRoom } from 'trystero'
import {joinRoom} from 'trystero/firebase'


export default {
    name: 'GameAdivinhe',
    data() {
        return {
            numeroAdivinha: 0,
            chuteNumero: 0,
            chuteAcerto: 0,
            friendID: "",
            pontos: 0,
            pontosFriend: 0,
            sendDrink: undefined as ActionSender<unknown>|undefined,
            sendAcerto: undefined as ActionSender<unknown>|undefined,
            sendPontos: undefined as ActionSender<unknown>|undefined,
            sendPontosFriend: undefined as ActionSender<unknown>|undefined,
        }
    },
    methods: {
        makeDrink() {
            this.sendDrink!({drink: 'negroni', withIce: true}, this.friendID)
        },
        makeAcerto() {
            if(!(this.numeroAdivinha <= 200 && this.numeroAdivinha >= 0)) {
                alert("APENAS NUMEROS DE 0 A 200!");
                return;
            }
            this.sendAcerto!({acerto: this.numeroAdivinha}, this.friendID)
            alert("NUMERO ENVIADO!");
        },
        adivinhar() {
            console.log("TENTANDO ADIVINHAR NUMERO!");
            if(this.chuteNumero == this.chuteAcerto) {
                this.pontos = this.pontos+1;
                this.sendPontosFriend!({pontosFriend: this.pontos}, this.friendID)
                this.chuteAcerto = 0;
                alert("PARABÉNS VOCÊ ACERTOU!!")
            } else {
                this.pontosFriend = this.pontosFriend+1;
                this.sendPontos!({pontos: this.pontosFriend}, this.friendID)
                const frase = this.chuteAcerto > this.chuteNumero ? "O NUMERO É MAIOR" : "O NUMERO É MENOR"
                alert("NÃO FOI DESSA VEZ. "+frase)
            }
        }
    },
    created() {
        console.log("COMPONENTE MONTADO")
        const firebase_key = import.meta.env.VITE_FIREBASE_KEY;
        const room = joinRoom({appId: firebase_key}, 'sala_01')
        room.onPeerJoin((peerId: string) => {
            console.log(`${peerId} joined`);
            this.friendID = peerId;
        })
        room.onPeerLeave((peerId: string) => console.log(`${peerId} left`))
        const [sendDrink, getDrink] = room.makeAction('drink')
        this.sendDrink = sendDrink;
        const [sendAcerto, getAcerto] = room.makeAction('acerto')
        this.sendAcerto = sendAcerto;
        const [sendPontos, getPontos] = room.makeAction('pontos')
        this.sendPontos = sendPontos;
        const [sendPontosFriend, getPontosFriend] = room.makeAction('pontosFriend')
        this.sendPontosFriend = sendPontosFriend;
        
        getAcerto((data: any, peerId: string) => {
            console.log(
                `got a number ${data.acerto} from ${peerId}`
            )
            this.chuteAcerto = data.acerto;
        }
        )
        
        getPontos((data: any, peerId: string) => {
            console.log(
                `got a number ${data.pontos} from ${peerId}`
            )
            this.pontos = data.pontos;
            console.log("gdsgfokdsok")
            console.log(data)
        }
        )
        
        getPontosFriend((data: any, peerId: string) => {
            console.log(
                `got a number ${data.pontosFriend} from ${peerId}`
            )
            this.pontosFriend = data.pontosFriend;
        }
        )
        getDrink((data: any, peerId: string) =>
            console.log(
                `got a ${data.drink} with${data.withIce ? '' : 'out'} ice from ${peerId}`
            )
        )
    



    }
}
</script>
<style scoped>
    input {
        width: 200px;
    }
</style>