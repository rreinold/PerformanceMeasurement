PERF_TOPIC = "performance"
function MeasurePerformance(req, resp) {
  // Run this per message
  var start = +new Date()

  // Perform Task

  var end = +new Date()
  var durationMs = end - start
  ClearBlade.init({request:req})
  ClearBlade.Messaging().publish(PERF_TOPIC, durationMs)

  // Do not use this - demo purpose only
  resp.success(true);
}
