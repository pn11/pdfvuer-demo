<template>
  <pdf src="https://arxiv.org/pdf/1707.08995.pdf" :page="1">
    <template slot="loading">
      loading content here...
    </template>
  </pdf>
</template>

<script>
import pdf from 'pdfvuer'

// import 'pdfjs-dist/build/pdf.worker.entry' // To be uncommented if you get error: Error: Setting up fake worker failed: "window.pdfjsWorker is undefined".

export default {
  name: 'PdfVuer',
  components: {
    pdf
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
