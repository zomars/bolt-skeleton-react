import React, { Component } from 'react'

class Record extends Component {
   render() {
    return (
      <div>
          ContentType: {this.props.match.params.contentType} <br/>
          Id: {this.props.match.params.id}
        {/*
        <h1>{{ record.title }}</h1>

        {# Output all fields, in the order as defined in the contenttype.
          To change the generated html and configure the options, see:
          https://docs.bolt.cm/templating #}
        {% with { 'record': record, 'common': true, 'extended': true, 'repeaters': true, 'blocks': true } %}
            {{ block('sub_fields', 'partials/_sub_fields.twig') }}
        {% endwith %}

        {# Uncomment this if you wish to dump the entire record to the client, for debugging purposes.
        {{ dump(record) }}
        #}

        {% include 'partials/_recordfooter.twig' with { 'record': record, 'extended': true } %}
         */}
      </div>
    )
  }
}

export default Record
