<?!= include('Stylesheet'); ?>

<div class='wrapper'>
  <div class='section'>
    <div class='content-logo'>
      <img src='<?!= getLogo() ?>' alt='OpenSUNY Logo' />
    </div>
    
    <div class='content-words'>
      
      <div class='text'>
        <strong><font size="+1">Analytic Gathering</font></strong>
        <br />
        Every morning between (around 2AM), the Dashboard can collect all the information from the associated rubrics, which will allow for updated metrics. Currently, this feature is <?!= checkTrigger("getDesignData") ?>.
        <br />
        <select name='gatherData' id='gatherData'>
          <option value='ON'>ON</option>
          <option value='OFF'>OFF</option>
        </select>        
      </div>
      
      <br />
      
      <div class='text'>
        <strong><font size="+1">Update Percentages</font></strong>  
        <br />
        When you open up the Dashboard, it can update the status of completion for each of the rubrics. Currently, this feature is <?!= checkTrigger("updatePercentages") ?>.
        <br />
        <select name='updatePercentages' id='updatePercentages'>
          <option value='ON'>ON</option>
          <option value='OFF'>OFF</option>
        </select>
      </div>
      
      <br />
      
      <div class='text'>
        <strong><font size="+1">Debug</font></strong>  
        <br />
        When troubleshooting the Dashboard, it is useful to turn "Debug Mode" on (so that message confirmations can be seen). Currently, this feature is <?!= checkDebugTrigger() ?>.
        <br />
        <select name='debug' id='debug'>
          <option value='ON'>ON</option>
          <option value='OFF'>OFF</option>
        </select>
      </div>      
        
    </div>
  </div>
</div>

<div class='footer'>

  <p class='finePrint'>Please only press the 'Submit' button once. This operation may take a few seconds to process,
  and multiple submissions may result in multiple courses being created. The configuration process can take up to 60 seconds.</p>
  
  
<input class='btn-ok' type='button' value='Submit' onclick="optionHandler(document.getElementById('gatherData').value, document.getElementById('updatePercentages').value, document.getElementById('debug').value)" />
<input class='btn-cancel' type='button' value='Cancel' onclick='google.script.host.close()' />  

</div>

<?!= include('JavaScript'); ?>
