const base_url = 'https://storage.googleapis.com/tfjs-examples/multivariate-linear-regression/data/';
const train_data = 'train-data.csv';
const train_target = 'train-target.csv';
const test_data = 'test-data.csv';
const test_target = 'test-target.csv';


function loadData(csvFile) {
  const url = `${base_url}${csvFile}`;

  Papa.parse(url, {
    download: true,
    header: true,
    complete: function(results) {
      console.log(`Loaded: ${csvFile}`);
      const rawData = results.data;

      if (!rawData[0]) {
        console.log('Data kosong!');
        return;
      }

      const keys = Object.keys(rawData[0]);
      const parsed = rawData.map(row =>
        keys.map(key => parseFloat(row[key]))
      );

      const tensor = tf.tensor2d(parsed);
      tensor.print();
    }
  });
}


loadData(train_data)
loadData(train_target)
loadData(test_data)
loadData(test_target)

