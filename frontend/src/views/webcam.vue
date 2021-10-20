<template>
  <div class="w-full flex flex-col justify-center items-center">
    <div class="flex justify-center items-center mt-8">
      <div class="p-2 w-16 cursor-pointer text-white bg-green-700 rounded shadow text-center" @click="openCamera">open</div>
      <div class="p-2 w-16 cursor-pointer text-white bg-gray-500 rounded shadow text-center ml-8" @click="closeCamera">close</div>
    </div>
    <video ref="video" id="video" width="640" height="360" preload autoplay loop muted class="mt-8"></video>
  </div>
</template>
<script setup>
  import {ref, onMounted, onUnmounted} from 'vue'
  const video = ref()

  async function openCamera () {
    navigator.getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia
    await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: {
        frameRate: {
          min: 15,
          ideal: 30,
          max: 60
        },
        facingMode: 'user'
      }
    }).then(function (stream) {
      window.stream = stream // make stream available to browser console
      video.value.srcObject = stream
    }).catch(function (err) {
      alert(err)
    })
  }
  function closeCamera(){
    if (typeof window.stream === 'object') {
      if(video.value) video.value.srcObject = null
      window.stream.getTracks().forEach(track => track.stop())
    }
  }
  onMounted(async function (){

  })
  onUnmounted(function () {
    closeCamera()
  })
</script>
