import React, { Component } from 'react'

class Search extends Component {
   render() {
    return (
      <div>
        {/*

        {# This template is used for search results. If 'search' is defined,
           we display an appropriate title. The 'records' array contains all of the
           records matching the current query. If there are no results, the
           code in the 'else' part of the for-loop is used. #}
        <h1>
            {% if search is not empty %}
                {{ __('general.phrase.search-results-for-variable', { '%search%': search }) }}
            {% else %}
                {{ __('general.phrase.search') }}
            {% endif %}
        </h1>

        {# Perhaps we post a small teaser, stored in the 'block' named 'Search teaser' #}
        {% setcontent block = "block/search-teaser" %}

        {# check if we have 'content'. If so, we know we have have a teaser to display. #}
        {% if block.content is defined %}
            {{ block.content }}
        {% endif %}

        <form method="get" action="{{ path('search') }}" id="searchform-inline" enctype="text/plain">
            <input type="search" value="{{ search|default() }}" placeholder="{{ __('general.phrase.search-ellipsis') }}" name="search" >
            <button type="submit">{{ __('general.phrase.search') }}</button>
        </form>

        {% for record in records %}
            <article>

                <h2><a href="{{ record.link }}">{{ record.title }}</a></h2>

                {% if record.image!="" %}
                    <a href="{{ image(record.image) }}">
                        <img src="{{ thumbnail(record.image, 400, 260) }}">
                    </a>
                {% endif %}

                {# display something introduction-like.. #}
                <p>{{ record.excerpt(300, false, search|default('')) }}</p>

            </article>

            {% if not loop.last %}
                <hr>
            {% endif %}

        {% else %}
            <article>

                <p>
                    {{ __('general.phrase.no-result-for-search-term', { '%SEARCHTERM%': search|escape }) }}
                </p>

            </article>
        {% endfor %}

        {# If there are more records than will fit on one page, the pager is shown. #}
        {{ pager(template = 'partials/_sub_pager.twig') }}
         */}
      </div>
    )
  }
}

export default Search