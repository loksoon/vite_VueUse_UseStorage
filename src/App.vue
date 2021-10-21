<script setup>
import { panelState } from '@/state.js'
</script>

<script>
export default{
  data(){
    return{
      onclickMethod:'0'
    }
  },
  methods:{
    switchPanel(value){
      this.panelState = value
    }
  }
}
</script>

<template>
<div>
  <button @click="switchPanel('panel_1'),onclickMethod = '1'">Change Storage in Method (panel_1)</button>
  <button @click="switchPanel('panel_2'),onclickMethod = '2'">Change Storage in Method (panel_2)</button>
  <button @click="panelState = 'panel_3',onclickMethod = '3'">Change Storage in @Click (panel_3)</button>
  <button @click="panelState = 'panel_4',onclickMethod = '4'">Change Storage in @Click (panel_4)</button>

  
  <p>Method Clicked: {{onclickMethod}}</p>
  <p>Panel State: {{panelState}}</p>
</div>
</template>
