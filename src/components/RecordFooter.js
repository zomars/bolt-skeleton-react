import React from 'react'

const RecordFooter = (props) => {
  const { record } = props
  return (
    <div>
      {/* This file is inserted as the 'footer' of each listed record. */}
      <p className="meta">
        {record.editlink &&
          <span class="edit-link"><a href={record.editlink}><strong>Edit</strong></a> - </span>
        }
        Written by <em>{record.ownerid}</em> on {record.datepublish}
      </p>
      {/*
      {% if extended|default() %}
      <p class="meta">
          <a href="{{ record.link() }}">{{ __('general.phrase.permalink') }}</a> -
          {# include the 'default' links to taxonomies. Check the documentation for ways to modify and customize
            what is output to the browser: https://docs.bolt.cm/contenttypes/taxonomies#displaying-taxonomies-in-templates #}
          {{ include('_sub_taxonomylinks.twig', { record: record }) }}
      </p>

      {% set previous = record.previous('id') %}
      {% set next = record.next('id') %}
      {% if previous or next %}
          <p class="meta">
              {% if previous %}
                  <a href="{{ previous.link }}">&laquo; {{ previous.title }}</a>
              {% endif %}
              {% if previous and next %}
              -
              {% endif %}
              {% if next %}
                  <a href="{{ next.link }}">{{ next.title }} &raquo;</a>
              {% endif %}
          </p>
      {% endif %}

      {% set relatedrecords = record.related() %}
      {% if relatedrecords is not empty %}
          <p class="meta">{{ __('general.phrase.related-content') }}
          <ul>
              {% for related in relatedrecords %}
                  <li><a href="{{ related.link }}">{{ related.title }}</a></li>
              {%  endfor %}
          </ul>
          </p>
      {% endif %}
      {% endif %}
      */}
    </div>
  )
}

export default RecordFooter