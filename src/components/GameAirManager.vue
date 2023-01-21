<template>
    <div>
        <h1>GAME AIR MANAGER</h1>
        <input type="text" v-model="friendID">
        <button @click="makeDrink">CLIQUE AQUI PARA ENVIAR UMA BEBIDA</button>
    </div>
</template>
<script lang="ts">
import type { ActionSender} from 'trystero'
//import { joinRoom } from 'trystero'
import {joinRoom} from 'trystero/firebase'


export default {
    name: 'GameAirManager',
    data() {
        return {
            friendID: "",
            sendDrink: undefined as ActionSender<unknown>|undefined
        }
    },
    methods: {
        makeDrink() {
            this.sendDrink!({drink: 'negroni', withIce: true}, this.friendID)
        }
    },
    created() {
        console.log("COMPONENTE MONTADO")
        const firebase_key = import.meta.env.VITE_FIREBASE_KEY;
        const room = joinRoom({appId: firebase_key}, 'sala_01')
        room.onPeerJoin((peerId: string) => console.log(`${peerId} joined`))
        room.onPeerLeave((peerId: string) => console.log(`${peerId} left`))
        const [sendDrink, getDrink] = room.makeAction('drink')
        this.sendDrink = sendDrink;
        
        getDrink((data: any, peerId: string) =>
            console.log(
                `got a ${data.drink} with${data.withIce ? '' : 'out'} ice from ${peerId}`
            )
        )
    



    }
}
</script>
<style scoped>
    
</style>